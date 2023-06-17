import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleSkillDto } from './dto/create-role-skill.dto';
import { UpdateRoleSkillDto } from './dto/update-role-skill.dto';
import { RoleSkill } from './entities/role-skill.entity';
import { RoleService } from 'src/role/role.service';

@Injectable()
export class RoleSkillService {
  constructor(
    @InjectRepository(RoleSkill)
    private roleSkillRepository: Repository<RoleSkill>,

    @Inject(RoleService)
    private readonly roleService: RoleService,
  ) {}

  async create(createRoleSkillDto: CreateRoleSkillDto) {
    const role = await this.roleService.findOneByID(createRoleSkillDto.role_id);

    return await this.roleSkillRepository.save({
      name: createRoleSkillDto.name,
      value: createRoleSkillDto.value,
      role: role,
    });
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
