import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Role } from 'src/role/entities/role.entity';
import { EmployeeSkillImpression } from 'src/employee-skill-impression/entities/employee-skill-impression.entity';

@Entity()
export class RoleSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  value: number;

  @ManyToOne(() => Role, (role) => role.roleSkills)
  role: Role;

  @OneToMany(
    () => EmployeeSkillImpression,
    (employeeSkillImpression) => employeeSkillImpression.skill,
  )
  employeeSkillImpressions: EmployeeSkillImpression[];
}
