import { Metric } from 'src/metric/entities/metric.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RoleMetric {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Role, (role) => role.roleMetrics)
  // role: Role;

  @ManyToOne(() => Metric, (metric) => metric.roleMetrics)
  metric: Metric;
}
