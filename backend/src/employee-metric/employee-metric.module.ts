import { Module } from '@nestjs/common';
import { EmployeeMetricService } from './employee-metric.service';
import { EmployeeMetricController } from './employee-metric.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeMetric } from './entities/employee-metric.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeMetric])],
  controllers: [EmployeeMetricController],
  providers: [EmployeeMetricService],
})
export class EmployeeMetricModule {}
