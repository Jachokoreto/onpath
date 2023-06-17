import { Employee } from 'src/employee/entities/employee.entity';
import { RoleSkill } from 'src/role-skill/entities/role-skill.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmployeeSkillImpression {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  impression: boolean;

  @ManyToOne(() => RoleSkill, (roleSkill) => roleSkill.employeeSkillImpressions)
  skill: RoleSkill;

  @ManyToOne(() => Employee, (employee) => employee.employeeSkillImpressions)
  employee: Employee;
}
