import { EmployeeRoleImpression } from 'src/employee-role-impression/entities/employee-role-impression.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Pathway } from 'src/pathway/entities/pathway.entity';
import { RoleMetric } from 'src/role-metric/entities/role-metric.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Pathway, (pathway) => pathway.roles)
  pathway: Pathway;

  @OneToMany(() => Employee, (employee) => employee.role)
  employees: Employee[];

  @OneToMany(
    () => EmployeeRoleImpression,
    (EmployeeRoleImpression) => EmployeeRoleImpression.role,
  )
  employeeRoleImpression: EmployeeRoleImpression[];

  @OneToMany(() => RoleMetric, (roleMetric) => roleMetric.role)
  roleMetrics: RoleMetric[];
}
