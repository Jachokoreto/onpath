import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeSkillImpressionController } from './employee-skill-impression.controller';
import { EmployeeSkillImpressionService } from './employee-skill-impression.service';

describe('EmployeeSkillImpressionController', () => {
  let controller: EmployeeSkillImpressionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeSkillImpressionController],
      providers: [EmployeeSkillImpressionService],
    }).compile();

    controller = module.get<EmployeeSkillImpressionController>(EmployeeSkillImpressionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
