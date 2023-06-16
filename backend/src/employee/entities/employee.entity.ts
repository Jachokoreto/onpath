import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from 'src/company/entities/company.entity';
import { EmployeeRoleImpression } from 'src/employee-role-impression/entities/employee-role-impression.entity';
import { EmployeeMetric } from 'src/employee-metric/entities/employee-metric.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Company, (company) => company.employees)
  company: Company;

  // @OneToMany(() => Role, (role) => role.employees)
  // role: Role;

  // For the opinion on one Role
  @OneToMany(
    () => EmployeeRoleImpression,
    (employeeRoleImpression) => employeeRoleImpression.employee,
  )
  employeeRoleImpressions: EmployeeRoleImpression[];

  //For all the employees metrics
  @OneToMany(() => EmployeeMetric, (employeeMetric) => employeeMetric.employee)
  employeeMetrics: EmployeeMetric[];
}
