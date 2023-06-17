import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeeSkillService } from './employee-skill.service';
import { CreateEmployeeSkillDto } from './dto/create-employee-skill.dto';
import { UpdateEmployeeSkillDto } from './dto/update-employee-skill.dto';
import { IsEnum, IsNotEmpty, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';

enum EmployeeSkillCreateType {
  SKILL = 'SKILL',
  METRIC = 'METRIC',
}

class EmployeeSkillPostBodyParameters {
  @IsNotEmpty()
  @IsEnum(EmployeeSkillCreateType)
  create_type: EmployeeSkillCreateType;

  @ValidateIf(
    (createParams) =>
      createParams.create_type === EmployeeSkillCreateType.SKILL,
  )
  @Transform((params) =>
    params.obj.create_type === EmployeeSkillCreateType.SKILL
      ? params.value
      : undefined,
  )
  create_skill: CreateEmployeeSkillDto;
}

@Controller('employee-skill')
export class EmployeeSkillController {
  constructor(private readonly employeeSkillService: EmployeeSkillService) {}

  @Post()
  create(@Body() bodyParams: EmployeeSkillPostBodyParameters) {
    switch (bodyParams.create_type) {
      case EmployeeSkillCreateType.SKILL:
        return this.employeeSkillService.create(bodyParams.create_skill);
    }
  }

  @Get()
  findAll() {
    return this.employeeSkillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeSkillService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeSkillDto: UpdateEmployeeSkillDto,
  ) {
    return this.employeeSkillService.update(+id, '');
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeSkillService.remove(+id);
  }
}
