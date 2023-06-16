import { Module } from '@nestjs/common';
import { EmployeeSkillService } from './employee-skill.service';
import { EmployeeSkillController } from './employee-skill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSkill } from './entities/employee-skill.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Metric } from 'src/metric/entities/metric.entity';
import { CalculationService } from 'src/calculation/calculation.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeSkill, Employee, Metric])],
  controllers: [EmployeeSkillController],
  providers: [EmployeeSkillService, CalculationService],
})
export class EmployeeSkillModule {}
