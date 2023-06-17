import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { PathwayModule } from 'src/pathway/pathway.module';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [TypeOrmModule.forFeature([Role]), PathwayModule, EmployeeModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
