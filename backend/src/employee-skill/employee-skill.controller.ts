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

@Controller('employee-skill')
export class EmployeeSkillController {
  constructor(private readonly employeeSkillService: EmployeeSkillService) {}

  @Post()
  create(@Body() createEmployeeSkillDto: CreateEmployeeSkillDto) {
    return this.employeeSkillService.create(createEmployeeSkillDto);
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
    return this.employeeSkillService.update(+id, updateEmployeeSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeSkillService.remove(+id);
  }
}
