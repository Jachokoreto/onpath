import { Module } from '@nestjs/common';
import { MetricService } from './metric.service';
import { MetricController } from './metric.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metric } from './entities/metric.entity';
import { EmployeeSkillService } from 'src/employee-skill/employee-skill.service';
import { EmployeeSkill } from 'src/employee-skill/entities/employee-skill.entity';
import { CalculationService } from 'src/calculation/calculation.service';
import { EmployeeService } from 'src/employee/employee.service';
import { Employee } from 'src/employee/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Metric, Employee, EmployeeSkill])],
  controllers: [MetricController],
  providers: [
    MetricService,
    EmployeeService,
    EmployeeSkillService,
    CalculationService,
  ],
})
export class MetricModule {}
