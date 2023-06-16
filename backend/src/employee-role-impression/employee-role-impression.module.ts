import { Module } from '@nestjs/common';
import { EmployeeRoleImpressionService } from './employee-role-impression.service';
import { EmployeeRoleImpressionController } from './employee-role-impression.controller';

@Module({
  controllers: [EmployeeRoleImpressionController],
  providers: [EmployeeRoleImpressionService]
})
export class EmployeeRoleImpressionModule {}
