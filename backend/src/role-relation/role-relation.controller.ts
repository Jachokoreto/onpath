import { Controller } from '@nestjs/common';
import { RoleRelationService } from './role-relation.service';

@Controller('role-relation')
export class RoleRelationController {
  constructor(private readonly roleRelationService: RoleRelationService) {}
}
