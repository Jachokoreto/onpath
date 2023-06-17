import { Module } from '@nestjs/common';
import { RoleSkillService } from './role-skill.service';
import { RoleSkillController } from './role-skill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleSkill } from './entities/role-skill.entity';
import { Role } from 'src/role/entities/role.entity';
import { RoleModule } from 'src/role/role.module';

@Module({
  imports: [TypeOrmModule.forFeature([RoleSkill]), RoleModule],
  controllers: [RoleSkillController],
  providers: [RoleSkillService],
})
export class RoleSkillModule {}
