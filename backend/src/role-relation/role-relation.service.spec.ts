import { Test, TestingModule } from '@nestjs/testing';
import { RoleRelationService } from './role-relation.service';

describe('RoleRelationService', () => {
  let service: RoleRelationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleRelationService],
    }).compile();

    service = module.get<RoleRelationService>(RoleRelationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
