'use client';

import TalentPoolList from '@/components/TalentPool';
import TalentRoleInterest from '@/components/TalentRoleInterest';
import TalentRoleSelection from '@/components/TalentRoleSelection';
import { callAPIs } from '@/lib/callAPI';
import Employee from '@/types/Employee';
import EmployeeSkill from '@/types/EmployeeSkill';
import { Role } from '@/types/Role';
import { useEffect, useState } from 'react';

const job: Role[] = [
  {
    id: 1,
    name: 'Frontend Developer',
    description: 'test',
    roleSkills: [
      {
        id: 1,
        name: 'React',
        value: 50,
      },
      {
        id: 2,
        name: 'Nestjs',
        value: 20,
      },
      {
        id: 3,
        name: 'Tailwind CSS',
        value: 70,
      },
    ],
  },
  {
    id: 1,
    name: 'Project Manager',
    description: 'test',
    roleSkills: [
      {
        id: 1,
        name: 'C++',
        value: 70,
      },
      {
        id: 2,
        name: 'Management',
        value: 80,
      },
      {
        id: 3,
        name: 'Leadership',
        value: 70,
      },
    ],
  },
];

const Retarded: EmployeeSkill[] = [
  { id: 1, name: 'React', value: 40 },
  { id: 2, name: 'Leadership', value: 20 },
  { id: 3, name: 'Management', value: 30 },
  { id: 3, name: 'CSS', value: 30 },
  { id: 3, name: 'HTML', value: 30 },
  { id: 3, name: 'Tailwind CSS', value: 90 },
  { id: 3, name: 'C', value: 30 },
];

const Smartass: EmployeeSkill[] = [
  { id: 1, name: 'React', value: 100 },
  { id: 2, name: 'Leadership', value: 100 },
  { id: 3, name: 'Management', value: 100 },
];

// const Dumb: Employee = {
//   id: 1,
//   name: 'Ding Dong',
//   company: 'Dingo Pharmacy',
//   role: 'Dingo Manager',
//   employeeSkill: Retarded,
// };

// const Smart: Employee = {
//   id: 2,
//   name: 'Yunzhe',
//   company: 'Dingo Pharmacy',
//   role: 'Yunzhee',
//   employeeSkill: Smartass,
// };

// const Employeelist: Employee[] = [Dumb, Smart];

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<Role | undefined>(undefined);
  const [interest, setInterest] = useState(false);
  const [roles, setRoles] = useState<Role[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    async function getRoles() {
      const roles = await callAPIs('role?search_type=PATHWAY&search_number=1');

      if (roles) {
        setRoles(JSON.parse(roles));
      }
    }
    async function getEmployees() {
      const employees = await callAPIs('employee?search_type=ALL');

      if (employees) {
        console.log(JSON.parse(employees));
        setEmployees(JSON.parse(employees));
      }
    }
    getRoles();
    getEmployees();
  }, []);

  return (
    <div>
      <TalentRoleSelection
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        roles={roles}
      ></TalentRoleSelection>
      <TalentRoleInterest
        interest={interest}
        setInterest={setInterest}
      ></TalentRoleInterest>
      {selectedRole && (
        <>
          <h5> {selectedRole.name}</h5>
          <TalentPoolList
            roleSkills={selectedRole.roleSkills}
            talents={employees}
            interest={interest}
          ></TalentPoolList>
        </>
      )}
    </div>
  );
}
