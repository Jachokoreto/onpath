import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeSkillDto } from './dto/create-employee-skill.dto';
import { EmployeeSkill } from './entities/employee-skill.entity';
import { EmployeeService } from 'src/employee/employee.service';

@Injectable()
export class EmployeeSkillService {
  constructor(
    @InjectRepository(EmployeeSkill)
    private employeeSkillRepository: Repository<EmployeeSkill>,

    @Inject(EmployeeService)
    private readonly employeeService: EmployeeService,
  ) {}

  async create(createEmployeeSkillDto: CreateEmployeeSkillDto) {
    const employee = await this.employeeService.findOneByID(
      createEmployeeSkillDto.employee_id,
    );
    const newEmployeeSkill = this.employeeSkillRepository.create({
      name: createEmployeeSkillDto.name,
      value: '0',
      employee: employee,
    });

    this.employeeSkillRepository.save(newEmployeeSkill);
  }

  async findAll(): Promise<EmployeeSkill[]> {
    return await this.employeeSkillRepository.find({
      relations: {
        employee: true,
        metrics: true,
      },
    });
  }

  async findOne(id: number): Promise<EmployeeSkill | null> {
    return await this.employeeSkillRepository.findOne({
      relations: { employee: true, metrics: true },
      where: { id: id },
    });
  }

  async update(id: number, value: string) {
    this.employeeSkillRepository.update(id, { value: value });
  }

  remove(id: number) {
    return `This action removes a #${id} employeeSkill`;
  }
}
