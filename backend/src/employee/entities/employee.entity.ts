import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from 'src/company/entities/company.entity';
import { EmployeeRoleImpression } from 'src/employee-role-impression/entities/employee-role-impression.entity';
import { Role } from 'src/role/entities/role.entity';
import { EmployeeSkill } from 'src/employee-skill/entities/employee-skill.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Company, (company) => company.employees)
  company: Company;

  @ManyToOne(() => Role, (role) => role.employees)
  role: Role;

  // For the opinion on one Role
  @OneToMany(
    () => EmployeeRoleImpression,
    (employeeRoleImpression) => employeeRoleImpression.employee,
  )
  employeeRoleImpressions: EmployeeRoleImpression[];

  // All Skills that a user has
  @OneToMany(() => EmployeeSkill, (employeeSkill) => employeeSkill.metrics)
  employeeSkills: EmployeeSkill[];
}
