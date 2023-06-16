import { Employee } from 'src/employee/entities/employee.entity';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class EmployeeRoleImpression {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  impression: boolean;

  @ManyToOne(() => Employee, (employee) => employee.employeeRoleImpressions)
  employee: Employee;

  // @ManyToOne(() => Role, (role) => role.employeeImpressions)
  // role: Role;
}
