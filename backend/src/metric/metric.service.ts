import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { Metric } from './entities/metric.entity';

@Injectable()
export class MetricService {
  constructor(
    @InjectRepository(Metric)
    private metricRepository: Repository<Metric>,
  ) {}
  create(createMetricDto: CreateMetricDto) {
    return 'This action adds a new metric';
  }

  findAll() {
    return `This action returns all metric`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metric`;
  }

  update(id: number, updateMetricDto: UpdateMetricDto) {
    return `This action updates a #${id} metric`;
  }

  remove(id: number) {
    return `This action removes a #${id} metric`;
  }
}
