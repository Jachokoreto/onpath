import Role from './Role';

export default interface RoleSkill {
  id: number;
  name: string;
  value: number;
  role: Role;
}
