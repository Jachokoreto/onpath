import RoleSkill from './RoleSkill';

export default interface Role {
  id: number;
  name: string;
  description: string;
  parentRoles: {
    id: number;
    parentRole: Role;
  }[];
  childRoles: {
    id: number;
    childRole: Role;
  }[];
  roleSkills: RoleSkill[];
}
