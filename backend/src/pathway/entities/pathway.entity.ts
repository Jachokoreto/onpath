import { Department } from 'src/department/entities/department.entity';
import { Role } from 'src/role/entities/role.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Pathway {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Department, (department) => department.pathways)
  department: Department;

  @OneToMany(() => Role, (role) => role.pathway)
  roles: Role[];
}
