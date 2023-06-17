import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleSkillDto } from './create-role-skill.dto';

export class UpdateRoleSkillDto extends PartialType(CreateRoleSkillDto) {}
