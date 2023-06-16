import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { CompanyModule } from './company/company.module';
import { DepartmentModule } from './department/department.module';
import { PathwayModule } from './pathway/pathway.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [DatabaseModule, CompanyModule, DepartmentModule, PathwayModule, RoleModule],
})
export class AppModule {}
