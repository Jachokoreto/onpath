import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleMetricService } from './role-metric.service';
import { CreateRoleMetricDto } from './dto/create-role-metric.dto';
import { UpdateRoleMetricDto } from './dto/update-role-metric.dto';

@Controller('role-metric')
export class RoleMetricController {
  constructor(private readonly roleMetricService: RoleMetricService) {}

  @Post()
  create(@Body() createRoleMetricDto: CreateRoleMetricDto) {
    return this.roleMetricService.create(createRoleMetricDto);
  }

  @Get()
  findAll() {
    return this.roleMetricService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleMetricService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleMetricDto: UpdateRoleMetricDto) {
    return this.roleMetricService.update(+id, updateRoleMetricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleMetricService.remove(+id);
  }
}
