import Employee from './Employee';
import Role from './Role';

export default interface EmployeeRoleImpression {
  id: number;
  impression: boolean;
  role: Role;
  employee: Employee;
}
