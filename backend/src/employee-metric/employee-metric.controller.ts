import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeMetricService } from './employee-metric.service';
import { CreateEmployeeMetricDto } from './dto/create-employee-metric.dto';
import { UpdateEmployeeMetricDto } from './dto/update-employee-metric.dto';

@Controller('employee-metric')
export class EmployeeMetricController {
  constructor(private readonly employeeMetricService: EmployeeMetricService) {}

  @Post()
  create(@Body() createEmployeeMetricDto: CreateEmployeeMetricDto) {
    return this.employeeMetricService.create(createEmployeeMetricDto);
  }

  @Get()
  findAll() {
    return this.employeeMetricService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeMetricService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeMetricDto: UpdateEmployeeMetricDto) {
    return this.employeeMetricService.update(+id, updateEmployeeMetricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeMetricService.remove(+id);
  }
}
