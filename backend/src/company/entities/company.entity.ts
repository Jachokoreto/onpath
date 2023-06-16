import { Employee } from 'src/employee/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Employee, (employee) => employee.company)
  employees: Employee[];

  // @OneToMany(() => Department, (department) => department.id)
  // departments: Department[];
}
