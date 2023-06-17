import { Module } from '@nestjs/common';
import { EmployeeSkillService } from './employee-skill.service';
import { EmployeeSkillController } from './employee-skill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSkill } from './entities/employee-skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeSkill])],
  controllers: [EmployeeSkillController],
  providers: [EmployeeSkillService],
})
export class EmployeeSkillModule {}
