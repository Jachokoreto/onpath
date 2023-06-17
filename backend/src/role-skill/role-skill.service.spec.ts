import { Test, TestingModule } from '@nestjs/testing';
import { RoleSkillService } from './role-skill.service';

describe('RoleSkillService', () => {
  let service: RoleSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleSkillService],
    }).compile();

    service = module.get<RoleSkillService>(RoleSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
