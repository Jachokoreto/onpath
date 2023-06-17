import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeSkillImpressionService } from './employee-skill-impression.service';

describe('EmployeeSkillImpressionService', () => {
  let service: EmployeeSkillImpressionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeSkillImpressionService],
    }).compile();

    service = module.get<EmployeeSkillImpressionService>(EmployeeSkillImpressionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
