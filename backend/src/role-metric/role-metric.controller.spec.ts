import { Test, TestingModule } from '@nestjs/testing';
import { RoleMetricController } from './role-metric.controller';
import { RoleMetricService } from './role-metric.service';

describe('RoleMetricController', () => {
  let controller: RoleMetricController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleMetricController],
      providers: [RoleMetricService],
    }).compile();

    controller = module.get<RoleMetricController>(RoleMetricController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
