import { Module } from '@nestjs/common';
import { RoleMetricService } from './role-metric.service';
import { RoleMetricController } from './role-metric.controller';

@Module({
  controllers: [RoleMetricController],
  providers: [RoleMetricService]
})
export class RoleMetricModule {}
