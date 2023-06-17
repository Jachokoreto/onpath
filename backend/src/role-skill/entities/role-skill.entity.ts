import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Role } from 'src/role/entities/role.entity';

@Entity()
export class RoleSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @ManyToOne(() => Role, (role) => role.roleSkills)
  role: Role;
}
