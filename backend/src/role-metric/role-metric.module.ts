import { Module } from '@nestjs/common';
import { RoleMetricService } from './role-metric.service';
import { RoleMetricController } from './role-metric.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleMetric } from './entities/role-metric.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoleMetric])],
  controllers: [RoleMetricController],
  providers: [RoleMetricService],
})
export class RoleMetricModule {}
