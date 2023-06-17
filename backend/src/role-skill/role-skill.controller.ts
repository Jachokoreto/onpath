import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoleSkillService } from './role-skill.service';
import { CreateRoleSkillDto } from './dto/create-role-skill.dto';
import { UpdateRoleSkillDto } from './dto/update-role-skill.dto';

@Controller('role-skill')
export class RoleSkillController {
  constructor(private readonly roleSkillService: RoleSkillService) {}

  @Post()
  create(@Body() createRoleSkillDto: CreateRoleSkillDto) {
    return this.roleSkillService.create(createRoleSkillDto);
  }

  @Get()
  findAll() {
    return this.roleSkillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleSkillService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRoleSkillDto: UpdateRoleSkillDto,
  ) {
    return this.roleSkillService.update(+id, updateRoleSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleSkillService.remove(+id);
  }
}
