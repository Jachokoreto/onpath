import { Module } from '@nestjs/common';
import { EmployeeRoleImpressionService } from './employee-role-impression.service';
import { EmployeeRoleImpressionController } from './employee-role-impression.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRoleImpression } from './entities/employee-role-impression.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeRoleImpression])],
  controllers: [EmployeeRoleImpressionController],
  providers: [EmployeeRoleImpressionService],
})
export class EmployeeRoleImpressionModule {}
