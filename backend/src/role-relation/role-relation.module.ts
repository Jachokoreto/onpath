import { Module } from '@nestjs/common';
import { RoleRelationService } from './role-relation.service';
import { RoleRelationController } from './role-relation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRelation } from './entities/role-relation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRelation])],
  controllers: [RoleRelationController],
  providers: [RoleRelationService],
})
export class RoleRelationModule {}
