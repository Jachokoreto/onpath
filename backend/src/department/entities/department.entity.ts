import { Pathway } from 'src/pathway/entities/pathway.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Pathway, (pathway) => pathway.id)
  pathways: Pathway[];
}
