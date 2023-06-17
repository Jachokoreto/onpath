import EmployeeSkill from './EmployeeSkill';

export interface Role {
  id: number;
  name: string;
  description: string;
  roleSkills: EmployeeSkill[];
}
