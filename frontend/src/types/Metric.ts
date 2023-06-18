import EmployeeSkill from './EmployeeSkill';

export default interface Metric {
  id: number;
  name: string;
  description: string;
  type: string;
  value: number;
  weightage: number;
  employeeSkill: EmployeeSkill;
}
