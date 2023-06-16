import { Injectable } from '@nestjs/common';
import { CreateRoleMetricDto } from './dto/create-role-metric.dto';
import { UpdateRoleMetricDto } from './dto/update-role-metric.dto';

@Injectable()
export class RoleMetricService {
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
