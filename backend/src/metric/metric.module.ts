import { Module } from '@nestjs/common';
import { MetricService } from './metric.service';
import { MetricController } from './metric.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metric } from './entities/metric.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Metric])],
  controllers: [MetricController],
  providers: [MetricService],
})
export class MetricModule {}
