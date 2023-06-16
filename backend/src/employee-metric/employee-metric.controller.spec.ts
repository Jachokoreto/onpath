import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeMetricController } from './employee-metric.controller';
import { EmployeeMetricService } from './employee-metric.service';

describe('EmployeeMetricController', () => {
  let controller: EmployeeMetricController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeMetricController],
      providers: [EmployeeMetricService],
    }).compile();

    controller = module.get<EmployeeMetricController>(EmployeeMetricController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
