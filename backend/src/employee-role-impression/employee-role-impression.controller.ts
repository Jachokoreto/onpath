import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeRoleImpressionService } from './employee-role-impression.service';
import { CreateEmployeeRoleImpressionDto } from './dto/create-employee-role-impression.dto';
import { UpdateEmployeeRoleImpressionDto } from './dto/update-employee-role-impression.dto';

@Controller('employee-role-impression')
export class EmployeeRoleImpressionController {
  constructor(private readonly employeeRoleImpressionService: EmployeeRoleImpressionService) {}

  @Post()
  create(@Body() createEmployeeRoleImpressionDto: CreateEmployeeRoleImpressionDto) {
    return this.employeeRoleImpressionService.create(createEmployeeRoleImpressionDto);
  }

  @Get()
  findAll() {
    return this.employeeRoleImpressionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeRoleImpressionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeRoleImpressionDto: UpdateEmployeeRoleImpressionDto) {
    return this.employeeRoleImpressionService.update(+id, updateEmployeeRoleImpressionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeRoleImpressionService.remove(+id);
  }
}
