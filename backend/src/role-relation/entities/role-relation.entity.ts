import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from 'src/role/entities/role.entity';

@Entity()
export class RoleRelation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Role, (role) => role.parentRoles)
  parentRole: Role;

  @ManyToOne(() => Role, (role) => role.childRoles)
  childRole: Role;
}
