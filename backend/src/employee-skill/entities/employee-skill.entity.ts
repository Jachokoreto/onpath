import { Employee } from 'src/employee/entities/employee.entity';
import { Metric } from 'src/metric/entities/metric.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class EmployeeSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  //Final Agregated value of the skills based on all the metrics given after weightage
  @Column({ type: 'float' })
  value: string;

  @ManyToOne(() => Employee, (employee) => employee.employeeSkills)
  employee: Employee;

  //All the Combined total metrics add up to the final value of skill after weightage
  @OneToMany(() => Metric, (metrics) => metrics.employeeSkill)
  metrics: Metric[];
}
