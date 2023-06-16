import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Employee } from 'src/employee/entities/employee.entity';
import { Role } from 'src/role/entities/role.entity';

@Entity()
export class EmployeeRoleImpression {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  impression: boolean;

  @ManyToOne(() => Role, (role) => role.employeeRoleImpressions)
  role: Role;

  @ManyToOne(() => Employee, (employee) => employee.employeeRoleImpressions)
  employee: Employee;
}
