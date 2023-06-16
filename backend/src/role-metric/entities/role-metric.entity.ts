import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Metric } from 'src/metric/entities/metric.entity';
import { Role } from 'src/role/entities/role.entity';

@Entity()
export class RoleMetric {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Role, (role) => role.roleMetrics)
  role: Role;

  @ManyToOne(() => Metric, (metric) => metric.roleMetrics)
  metric: Metric;
}
