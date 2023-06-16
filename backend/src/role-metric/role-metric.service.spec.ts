import { Test, TestingModule } from '@nestjs/testing';
import { RoleMetricService } from './role-metric.service';

describe('RoleMetricService', () => {
  let service: RoleMetricService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleMetricService],
    }).compile();

    service = module.get<RoleMetricService>(RoleMetricService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
