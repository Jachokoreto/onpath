import { Injectable } from '@nestjs/common';
import { Metric } from 'src/metric/entities/metric.entity';

@Injectable()
export class CalculationService {
  aggregateMetrics(metrics: Metric[]): number {
    return metrics.reduce(
      (value, metric) => value + metric.value * (metric.weightage / 100),
      0,
    );
  }
}
