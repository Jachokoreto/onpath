import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeMetricDto } from './dto/create-employee-metric.dto';
import { UpdateEmployeeMetricDto } from './dto/update-employee-metric.dto';
import { EmployeeMetric } from './entities/employee-metric.entity';

@Injectable()
export class EmployeeMetricService {
  constructor(
    @InjectRepository(EmployeeMetric)
    private EmployeeMetricRepository: Repository<EmployeeMetric>,
  ) {}
  create(createEmployeeMetricDto: CreateEmployeeMetricDto) {
    return 'This action adds a new employeeMetric';
  }

  findAll() {
    return `This action returns all employeeMetric`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeMetric`;
  }

  update(id: number, updateEmployeeMetricDto: UpdateEmployeeMetricDto) {
    return `This action updates a #${id} employeeMetric`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeMetric`;
  }
}
