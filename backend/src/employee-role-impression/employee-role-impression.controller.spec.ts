import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeRoleImpressionController } from './employee-role-impression.controller';
import { EmployeeRoleImpressionService } from './employee-role-impression.service';

describe('EmployeeRoleImpressionController', () => {
  let controller: EmployeeRoleImpressionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeRoleImpressionController],
      providers: [EmployeeRoleImpressionService],
    }).compile();

    controller = module.get<EmployeeRoleImpressionController>(EmployeeRoleImpressionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
