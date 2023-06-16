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
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsString,
  ValidateIf,
} from 'class-validator';
import { Transform } from 'class-transformer';

enum EmployeeSearchType {
  ALL = 'ALL',
  ONE = 'ONE',
  NAME = 'NAME',
}

class EmployeeGetQueryParameters {
  @IsNotEmpty()
  @IsEnum(EmployeeSearchType)
  search_type: EmployeeSearchType;

  @ValidateIf(
    (searchType) => searchType.search_type === EmployeeSearchType.NAME,
  )
  @Transform((params) =>
    params.obj.search_type === EmployeeSearchType.NAME
      ? params.value
      : undefined,
  )
  @IsString()
  search_string: string;

  @ValidateIf(
    (searchType) => searchType.search_type === EmployeeSearchType.NAME,
  )
  @Transform((params) =>
    params.obj.search_type === EmployeeSearchType.ONE
      ? params.value
      : undefined,
  )
  @IsNumberString()
  search_number: number;
}

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  async find(
    @Query(
      new ValidationPipe({
        forbidNonWhitelisted: true,
      }),
    )
    queryOptions: EmployeeGetQueryParameters,
  ) {
    switch (queryOptions.search_type) {
      case EmployeeSearchType.ALL:
        return await this.employeeService.findAll();
      case EmployeeSearchType.NAME:
        return this.employeeService.findOneByName(queryOptions.search_string);
      case EmployeeSearchType.ONE:
        return this.employeeService.findOneByID(queryOptions.search_number);
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
