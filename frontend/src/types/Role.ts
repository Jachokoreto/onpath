import EmployeeSkill from './EmployeeSkill';

export default interface Role {
  id: number;
  name: string;
  description: string;
  roleSkills: EmployeeSkill[];
}
