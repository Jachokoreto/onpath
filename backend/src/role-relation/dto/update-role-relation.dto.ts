import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleRelationDto } from './create-role-relation.dto';

export class UpdateRoleRelationDto extends PartialType(CreateRoleRelationDto) {}
