import { Pathway } from 'src/pathway/entities/pathway.entity';
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

  // @OneToMany(() => RoleMetric, (roleMetric) => roleMetric.role)
  // roleMetrics: RoleMetric[];
}
