import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleSkillDto } from './dto/create-role-skill.dto';
import { UpdateRoleSkillDto } from './dto/update-role-skill.dto';
import { RoleSkill } from './entities/role-skill.entity';

@Injectable()
export class RoleSkillService {
  constructor(
    @InjectRepository(RoleSkill)
    private roleSkillRepository: Repository<RoleSkill>,
  ) {}

  create(createRoleSkillDto: CreateRoleSkillDto) {
    return 'This action adds a new roleSkill';
  }

  findAll() {
    return `This action returns all roleSkill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roleSkill`;
  }

  update(id: number, updateRoleSkillDto: UpdateRoleSkillDto) {
    return `This action updates a #${id} roleSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleSkill`;
  }
}
