import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { MetricService } from './metric.service';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsString,
  ValidateIf,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { Metric } from './entities/metric.entity';

enum MetricSearchType {
  ALL = 'ALL',
  MULTI = 'MULTI',
  ONE = 'ONE',
  TYPE = 'TYPE',
}

class MetricGetQueryParameters {
  @IsNotEmpty()
  @IsEnum(MetricSearchType)
  search_type: MetricSearchType;

  @ValidateIf(
    (searchParams) => searchParams.search_type === MetricSearchType.TYPE,
  )
  @Transform((params) =>
    params.obj.search_type === MetricSearchType.TYPE ? params.value : undefined,
  )
  @IsString()
  search_string: string;

  @ValidateIf(
    (searchParams) => searchParams.search_type === MetricSearchType.ONE,
  )
  @Transform((params) =>
    params.obj.search_type === MetricSearchType.ONE ? params.value : undefined,
  )
  @IsNumberString()
  search_number: number;

  @ValidateIf(
    (searchParams) => searchParams.search_type === MetricSearchType.MULTI,
  )
  @Transform((params) =>
    params.obj.search_type === MetricSearchType.MULTI
      ? params.value
      : undefined,
  )
  @IsArray()
  search_array: number[];
}

@Controller('metric')
export class MetricController {
  constructor(private readonly metricService: MetricService) {}

  @Post()
  async create(@Body() createMetricDto: CreateMetricDto): Promise<Metric> {
    return this.metricService.create(createMetricDto);
  }

  @Get()
  async find(
    @Query(
      new ValidationPipe({
        forbidNonWhitelisted: true,
      }),
    )
    queryOptions: MetricGetQueryParameters,
  ): Promise<Metric | Metric[]> {
    switch (queryOptions.search_type) {
      case MetricSearchType.ALL:
        return await this.metricService.findAll();
      case MetricSearchType.MULTI:
        return await this.metricService.findByIDs(queryOptions.search_array);
      case MetricSearchType.ONE:
        return await this.metricService.findOneByID(queryOptions.search_number);
      case MetricSearchType.TYPE:
        return await this.metricService.findOneByType(
          queryOptions.search_string,
        );
    }
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetricDto: UpdateMetricDto) {
    return this.metricService.update(+id, updateMetricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metricService.remove(+id);
  }
}
