import { Module } from '@nestjs/common';
import { EmployeeSkillService } from './employee-skill.service';
import { EmployeeSkillController } from './employee-skill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSkill } from './entities/employee-skill.entity';
import { EmployeeService } from 'src/employee/employee.service';
import { Employee } from 'src/employee/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeSkill, Employee])],
  controllers: [EmployeeSkillController],
  providers: [EmployeeSkillService, EmployeeService],
})
export class EmployeeSkillModule {}
