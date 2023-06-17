import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { Metric } from './entities/metric.entity';
import { CalculationService } from 'src/calculation/calculation.service';
import { EmployeeSkillService } from 'src/employee-skill/employee-skill.service';

@Injectable()
export class MetricService {
  constructor(
    @InjectRepository(Metric)
    private metricRepository: Repository<Metric>,

    @Inject(EmployeeSkillService)
    private readonly employeeSkillService: EmployeeSkillService,

    @Inject(CalculationService)
    private readonly calculationService: CalculationService,
  ) {}

  async create(createMetricDto: CreateMetricDto): Promise<Metric> {
    const employeeSkill = await this.employeeSkillService.findOne(
      createMetricDto.employee_skill_id,
    );
    const aggregatedValue = this.calculationService.aggregateMetrics(
      employeeSkill.metrics,
    );
    const metric = this.metricRepository.create({
      ...createMetricDto.metric,
      employeeSkill: employeeSkill,
    });

    await this.metricRepository.save(metric);
    this.employeeSkillService.update(employeeSkill.id, String(aggregatedValue));
    return metric;
  }

  async findAll(): Promise<Metric[]> {
    return await this.metricRepository.find();
  }

  async findByIDs(ids: number[]): Promise<Metric[]> {
    return await this.metricRepository.find({ where: { id: In(ids) } });
  }

  async findOneByID(id: number): Promise<Metric | null> {
    return await this.metricRepository.findOne({ where: { id: id } });
  }

  async findOneByType(type: string): Promise<Metric | null> {
    return await this.metricRepository.findOne({ where: { type: type } });
  }

  update(id: number, updateMetricDto: UpdateMetricDto) {
    return `This action updates a #${id} metric`;
  }

  remove(id: number) {
    return `This action removes a #${id} metric`;
  }
}
