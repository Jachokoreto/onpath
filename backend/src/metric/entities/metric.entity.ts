import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EmployeeSkill } from 'src/employee-skill/entities/employee-skill.entity';

@Entity()
export class Metric {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  value: number;

  @Column()
  weightage: number;

  @ManyToOne(() => EmployeeSkill, (employeeSkill) => employeeSkill.metrics)
  employeeSkill: EmployeeSkill;
}
