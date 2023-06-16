import { Employee } from 'src/employee/entities/employee.entity';
import { Metric } from 'src/metric/entities/metric.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmployeeMetric {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.employeeMetrics)
  employee: Employee;

  @ManyToOne(() => Employee, (employee) => employee.employeeMetrics)
  metric: Metric;

  @Column()
  value: number;
}
