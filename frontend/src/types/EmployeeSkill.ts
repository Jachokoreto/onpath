import Employee from './Employee';

export default interface EmployeeSkill {
  id: number;
  name: string;
  value: number;
  employee?: Employee;
  // metric: Metric[];
}
