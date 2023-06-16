import { Company } from 'src/company/entities/company.entity';
import { Pathway } from 'src/pathway/entities/pathway.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Company, (company) => company.departments)
  company: Company;

  @OneToMany(() => Pathway, (pathway) => pathway.department)
  pathways: Pathway[];
}
