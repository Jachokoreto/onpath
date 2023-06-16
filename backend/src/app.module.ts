import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { CompanyModule } from './company/company.module';
import { DepartmentModule } from './department/department.module';
import { PathwayModule } from './pathway/pathway.module';
import { RoleModule } from './role/role.module';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeRoleImpressionModule } from './employee-role-impression/employee-role-impression.module';
import { MetricModule } from './metric/metric.module';
import { RoleSkillModule } from './role-skill/role-skill.module';
import { EmployeeSkillModule } from './employee-skill/employee-skill.module';

@Module({
  imports: [
    DatabaseModule,
    CompanyModule,
    EmployeeModule,
    EmployeeRoleImpressionModule,
    MetricModule,
    DepartmentModule,
    PathwayModule,
    RoleModule,
    RoleSkillModule,
    EmployeeSkillModule,
  ],
})
export class AppModule {}
