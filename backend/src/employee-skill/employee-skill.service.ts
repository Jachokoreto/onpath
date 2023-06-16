import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateEmployeeSkillDto } from './dto/create-employee-skill.dto';
import { UpdateEmployeeSkillDto } from './dto/update-employee-skill.dto';
import { EmployeeSkill } from './entities/employee-skill.entity';
import { CalculationService } from 'src/calculation/calculation.service';
import { Metric } from 'src/metric/entities/metric.entity';
import { Employee } from 'src/employee/entities/employee.entity';

@Injectable()
export class EmployeeSkillService {
  constructor(
    @InjectRepository(EmployeeSkill)
    private employeeSkillRepository: Repository<EmployeeSkill>,

    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,

    @InjectRepository(Metric)
    private metricRepository: Repository<Metric>,

    @Inject(CalculationService)
    private calculationService: CalculationService,
  ) {}

  async create(createEmployeeSkillDto: CreateEmployeeSkillDto) {
    // Fill in test data
    // this.employeeRepository.save({
    //   name: 'Test Employee',
    // });
    // this.metricRepository.save([
    //   {
    //     name: 'React Cert',
    //     description: 'Extensive React Cert',
    //     type: 'Certification',
    //     value: 7,
    //     weightage: 20,
    //   },
    //   {
    //     name: 'React Cert 2',
    //     description: 'Extensive React Cert 2',
    //     type: 'Certification',
    //     value: 6,
    //     weightage: 20,
    //   },
    // ]);

    const employee = await this.employeeRepository.findOneBy({
      id: createEmployeeSkillDto.employee_id,
    });
    const metrics = await this.metricRepository.findBy({
      id: In(createEmployeeSkillDto.metric_ids),
    });
    const aggregatedValue = this.calculationService.aggregateMetrics(metrics);

    const newEmployeeSkill = this.employeeSkillRepository.create({
      name: createEmployeeSkillDto.name,
      value: String(aggregatedValue),
      employee: employee,
      metrics: metrics,
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
