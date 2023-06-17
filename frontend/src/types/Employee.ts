import EmployeeSkill from './EmployeeSkill';

export default interface Employee {
  id: number;
  name: string;
  company: string;
  role: string;
  employeeSkill: EmployeeSkill[];
}
