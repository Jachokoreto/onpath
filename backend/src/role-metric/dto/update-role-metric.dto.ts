import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleMetricDto } from './create-role-metric.dto';

export class UpdateRoleMetricDto extends PartialType(CreateRoleMetricDto) {}
