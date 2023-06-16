import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeRoleImpressionService } from './employee-role-impression.service';

describe('EmployeeRoleImpressionService', () => {
  let service: EmployeeRoleImpressionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeRoleImpressionService],
    }).compile();

    service = module.get<EmployeeRoleImpressionService>(EmployeeRoleImpressionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
