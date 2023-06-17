'use client';

import TalentPoolList from '@/components/TalentPool';
import Employee from '@/types/Employee';
import EmployeeSkill from '@/types/EmployeeSkill';
import { Role } from '@/types/Role';

const job: Role = {
  name: 'Website Development Manager',
  roleSkills: [
    {
      id: 1,
      name: 'React',
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
      value: 50,
    },
  ],
};
const Retarded: EmployeeSkill[] = [
  { id: 1, name: 'React', value: 40 },
  { id: 2, name: 'Leadership', value: 20 },
  { id: 3, name: 'Management', value: 30 },
  { id: 3, name: 'CSS', value: 30 },
  { id: 3, name: 'HTML', value: 30 },
  { id: 3, name: 'C++', value: 30 },
  { id: 3, name: 'C', value: 30 },
];

const Smartass: EmployeeSkill[] = [
  { id: 1, name: 'React', value: 100 },
  { id: 2, name: 'Leadership', value: 100 },
  { id: 3, name: 'Management', value: 100 },
];

const Dumb: Employee = {
  id: 1,
  name: 'Ding Dong',
  company: 'Dingo Pharmacy',
  role: 'Dingo Manager',
  employeeSkill: Retarded,
};

const Smart: Employee = {
  id: 2,
  name: 'Yunzhe',
  company: 'Dingo Pharmacy',
  role: 'Yunzhee',
  employeeSkill: Smartass,
};

const Employeelist: Employee[] = [Dumb, Smart];

export default function Home() {
  return (
    <div>
      <h5>{job.name}</h5>
      <TalentPoolList talents={Employeelist} roleSkills={job.roleSkills} />
    </div>
  );
}
