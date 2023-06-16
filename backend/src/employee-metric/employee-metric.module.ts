import { Module } from '@nestjs/common';
import { EmployeeMetricService } from './employee-metric.service';
import { EmployeeMetricController } from './employee-metric.controller';

@Module({
  controllers: [EmployeeMetricController],
  providers: [EmployeeMetricService]
})
export class EmployeeMetricModule {}
