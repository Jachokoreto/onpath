import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeMetricService } from './employee-metric.service';

describe('EmployeeMetricService', () => {
  let service: EmployeeMetricService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeMetricService],
    }).compile();

    service = module.get<EmployeeMetricService>(EmployeeMetricService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
