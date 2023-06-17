import { Module } from '@nestjs/common';
import { EmployeeSkillImpressionService } from './employee-skill-impression.service';
import { EmployeeSkillImpressionController } from './employee-skill-impression.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSkillImpression } from './entities/employee-skill-impression.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeSkillImpression])],
  controllers: [EmployeeSkillImpressionController],
  providers: [EmployeeSkillImpressionService],
})
export class EmployeeSkillImpressionModule {}
