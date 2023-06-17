import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeSkillImpressionDto } from './create-employee-skill-impression.dto';

export class UpdateEmployeeSkillImpressionDto extends PartialType(CreateEmployeeSkillImpressionDto) {}
