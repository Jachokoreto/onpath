import { Test, TestingModule } from '@nestjs/testing';
import { RoleRelationController } from './role-relation.controller';
import { RoleRelationService } from './role-relation.service';

describe('RoleRelationController', () => {
  let controller: RoleRelationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleRelationController],
      providers: [RoleRelationService],
    }).compile();

    controller = module.get<RoleRelationController>(RoleRelationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
