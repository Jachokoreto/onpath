import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeSkillController } from './employee-skill.controller';
import { EmployeeSkillService } from './employee-skill.service';

describe('EmployeeSkillController', () => {
  let controller: EmployeeSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeSkillController],
      providers: [EmployeeSkillService],
    }).compile();

    controller = module.get<EmployeeSkillController>(EmployeeSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
