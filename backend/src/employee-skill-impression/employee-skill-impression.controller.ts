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
import { EmployeeSkillImpressionService } from './employee-skill-impression.service';
import { CreateEmployeeSkillImpressionDto } from './dto/create-employee-skill-impression.dto';
import { UpdateEmployeeSkillImpressionDto } from './dto/update-employee-skill-impression.dto';
import {
  IsNotEmpty,
  IsEnum,
  ValidateIf,
  IsNumberString,
} from 'class-validator';
import { Transform } from 'class-transformer';

enum ImpressionSearchType {
  SKILL = 'SKILL',
  EMPLOYEE = 'EMPLOYEE',
}

class ImpressionGetQueryParameters {
  @IsNotEmpty()
  @IsEnum(ImpressionSearchType)
  search_type: ImpressionSearchType;

  @ValidateIf(
    (searchType) =>
      searchType.search_type === ImpressionSearchType.SKILL ||
      searchType.search_type === ImpressionSearchType.EMPLOYEE,
  )
  @Transform((params) =>
    params.obj.search_type === ImpressionSearchType.SKILL ||
    params.obj.search_type === ImpressionSearchType.EMPLOYEE
      ? params.value
      : undefined,
  )
  @IsNumberString()
  search_number: number;
}

// class ImpressionPostBodyParameters {
// 	@IsNotEmpty()
// 	@IsNumberString()
// 
// }

@Controller('employee-skill-impression')
export class EmployeeSkillImpressionController {
  constructor(
    private readonly employeeSkillImpressionService: EmployeeSkillImpressionService,
  ) {}

  @Post()
  create(
    @Body() createEmployeeSkillImpressionDto: CreateEmployeeSkillImpressionDto,
  ) {
    return this.employeeSkillImpressionService.create(
      createEmployeeSkillImpressionDto,
    );
  }

  @Get()
  async find(
    @Query(
      new ValidationPipe({
        forbidNonWhitelisted: true,
      }),
    )
    queryParameters: ImpressionGetQueryParameters,
  ) {
    switch (queryParameters.search_type) {
      case ImpressionSearchType.SKILL:
        return await this.employeeSkillImpressionService.findBySkill(
          queryParameters.search_number,
        );
      case ImpressionSearchType.EMPLOYEE:
        return await this.employeeSkillImpressionService.findByEmployee(
          queryParameters.search_number,
        );
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeSkillImpressionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeSkillImpressionDto: UpdateEmployeeSkillImpressionDto,
  ) {
    return this.employeeSkillImpressionService.update(
      +id,
      updateEmployeeSkillImpressionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeSkillImpressionService.remove(+id);
  }
}
