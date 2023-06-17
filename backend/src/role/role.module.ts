import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { PathwayModule } from 'src/pathway/pathway.module';
import { EmployeeModule } from 'src/employee/employee.module';
import { RoleRelationService } from 'src/role-relation/role-relation.service';
import { RoleRelation } from 'src/role-relation/entities/role-relation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role, RoleRelation]),
    PathwayModule,
    EmployeeModule,
  ],
  controllers: [RoleController],
  providers: [RoleService, RoleRelationService],
})
export class RoleModule {}
