import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { CompanyModule } from './company/company.module';
import { DepartmentModule } from './department/department.module';
import { PathwayModule } from './pathway/pathway.module';
import { RoleModule } from './role/role.module';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeRoleImpressionModule } from './employee-role-impression/employee-role-impression.module';
import { MetricModule } from './metric/metric.module';
import { EmployeeMetricModule } from './employee-metric/employee-metric.module';
import { RoleMetricModule } from './role-metric/role-metric.module';

@Module({
  imports: [
    DatabaseModule,
    CompanyModule,
    EmployeeModule,
    EmployeeRoleImpressionModule,
    MetricModule,
    EmployeeMetricModule,
    RoleMetricModule,
    DepartmentModule,
    PathwayModule,
    RoleModule,
  ],
})
export class AppModule {}
