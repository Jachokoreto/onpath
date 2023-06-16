import { EmployeeMetric } from 'src/employee-metric/entities/employee-metric.entity';
import { RoleMetric } from 'src/role-metric/entities/role-metric.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Metric {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  weightage: number;

  @OneToMany(() => RoleMetric, (roleMetric) => roleMetric.metric)
  roleMetrics: RoleMetric[];

  @OneToMany(() => EmployeeMetric, (employeeMetric) => employeeMetric.metric)
  employeeMetrics: EmployeeMetric[];
}
