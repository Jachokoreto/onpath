import { Module } from '@nestjs/common';
import { RoleSkillService } from './role-skill.service';
import { RoleSkillController } from './role-skill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleSkill } from './entities/role-skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoleSkill])],
  controllers: [RoleSkillController],
  providers: [RoleSkillService],
})
export class RoleSkillModule {}
