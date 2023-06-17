import { EmployeeRoleImpression } from 'src/employee-role-impression/entities/employee-role-impression.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Pathway } from 'src/pathway/entities/pathway.entity';
import { RoleRelation } from 'src/role-relation/entities/role-relation.entity';
import { RoleSkill } from 'src/role-skill/entities/role-skill.entity';
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

  @OneToMany(() => RoleRelation, (roleRelation) => roleRelation.childRole)
  parentRoles: RoleRelation[];

  @OneToMany(() => RoleRelation, (roleRelation) => roleRelation.parentRole)
  childRoles: RoleRelation[];

  @OneToMany(() => RoleSkill, (roleSkill) => roleSkill.role)
  roleSkills: RoleSkill[];

  @OneToMany(() => Employee, (employee) => employee.role)
  employees: Employee[];

  @OneToMany(
    () => EmployeeRoleImpression,
    (EmployeeRoleImpression) => EmployeeRoleImpression.role,
  )
  employeeRoleImpressions: EmployeeRoleImpression[];
}
