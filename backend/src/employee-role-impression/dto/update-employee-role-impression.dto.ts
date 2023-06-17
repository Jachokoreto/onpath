import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeRoleImpressionDto } from './create-employee-role-impression.dto';

export class UpdateEmployeeRoleImpressionDto extends PartialType(CreateEmployeeRoleImpressionDto) {}
