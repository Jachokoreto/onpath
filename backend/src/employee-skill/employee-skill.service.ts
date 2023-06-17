import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeSkillDto } from './dto/create-employee-skill.dto';
import { UpdateEmployeeSkillDto } from './dto/update-employee-skill.dto';
import { EmployeeSkill } from './entities/employee-skill.entity';

@Injectable()
export class EmployeeSkillService {
  constructor(
    @InjectRepository(EmployeeSkill)
    private employeeSkillRepository: Repository<EmployeeSkill>,
  ) {}

  create(createEmployeeSkillDto: CreateEmployeeSkillDto) {
    return 'This action adds a new employeeSkill';
  }

  findAll() {
    return `This action returns all employeeSkill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeSkill`;
  }

  update(id: number, updateEmployeeSkillDto: UpdateEmployeeSkillDto) {
    return `This action updates a #${id} employeeSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeSkill`;
  }
}
