import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeMetricDto } from './create-employee-metric.dto';

export class UpdateEmployeeMetricDto extends PartialType(CreateEmployeeMetricDto) {}
