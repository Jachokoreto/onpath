import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleMetricDto } from './dto/create-role-metric.dto';
import { UpdateRoleMetricDto } from './dto/update-role-metric.dto';
import { RoleMetric } from './entities/role-metric.entity';

@Injectable()
export class RoleMetricService {
  constructor(
    @InjectRepository(RoleMetric)
    private roleMetricRepository: Repository<RoleMetric>,
  ) {}
  create(createRoleMetricDto: CreateRoleMetricDto) {
    return 'This action adds a new roleMetric';
  }

  findAll() {
    return `This action returns all roleMetric`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roleMetric`;
  }

  update(id: number, updateRoleMetricDto: UpdateRoleMetricDto) {
    return `This action updates a #${id} roleMetric`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleMetric`;
  }
}
