import { PartialType } from '@nestjs/mapped-types';
import { CreatePathwayDto } from './create-pathway.dto';

export class UpdatePathwayDto extends PartialType(CreatePathwayDto) {}
