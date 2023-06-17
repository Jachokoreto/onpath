import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeSkillImpressionDto } from './dto/create-employee-skill-impression.dto';
import { UpdateEmployeeSkillImpressionDto } from './dto/update-employee-skill-impression.dto';
import { EmployeeSkillImpression } from './entities/employee-skill-impression.entity';

@Injectable()
export class EmployeeSkillImpressionService {
  constructor(
    @InjectRepository(EmployeeSkillImpression)
    private employeeSkillImpressionRepository: Repository<EmployeeSkillImpression>,
  ) {}

  create(createEmployeeSkillImpressionDto: CreateEmployeeSkillImpressionDto) {
    return 'This action adds a new employeeSkillImpression';
  }

  async findByEmployee(employeeID: number): Promise<EmployeeSkillImpression[]> {
    const data: EmployeeSkillImpression[] =
      await this.employeeSkillImpressionRepository.find({
        relations: {
          employee: true,
        },
        where: {
          employee: {
            id: employeeID,
          },
        },
      });

    return data;
  }

  async findBySkill(skillID: number): Promise<EmployeeSkillImpression[]> {
    const data: EmployeeSkillImpression[] =
      await this.employeeSkillImpressionRepository.find({
        relations: {
          employee: true,
        },
        where: {
          skill: {
            id: skillID,
          },
        },
      });

    return data;
  }

  findAll() {
    return `This action returns all employeeSkillImpression`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeSkillImpression`;
  }

  update(
    id: number,
    updateEmployeeSkillImpressionDto: UpdateEmployeeSkillImpressionDto,
  ) {
    return `This action updates a #${id} employeeSkillImpression`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeSkillImpression`;
  }
}
