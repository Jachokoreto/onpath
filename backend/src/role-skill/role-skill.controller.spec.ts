import { Test, TestingModule } from '@nestjs/testing';
import { RoleSkillController } from './role-skill.controller';
import { RoleSkillService } from './role-skill.service';

describe('RoleSkillController', () => {
  let controller: RoleSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleSkillController],
      providers: [RoleSkillService],
    }).compile();

    controller = module.get<RoleSkillController>(RoleSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
