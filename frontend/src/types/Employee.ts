import EmployeeSkill from './EmployeeSkill';
import EmployeeRoleImpression from './EmployeeRoleImpression';
import Role from './Role';

export default interface Employee {
  id: number;
  name: string;
  company: string;
  role: Role;
  employeeRoleImpressions: EmployeeRoleImpression[];
  // employeeSkillImpressions: EmployeeSkillImpression[];
  employeeSkills: EmployeeSkill[];
}
