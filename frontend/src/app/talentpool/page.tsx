'use client';

import TalentPoolList from '@/components/TalentPool';
import TalentRoleSelection from '@/components/TalentRoleSelection';
import SectionTitle from '@/components/common/SectionTitle';
import { callAPIs } from '@/lib/callAPI';
import Employee from '@/types/Employee';
import EmployeeSkill from '@/types/EmployeeSkill';
import { Role } from '@/types/Role';
import { useState } from 'react';

const job: Role[] = [
  {
    name: 'Frontend Developer',
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
    name: 'Project Manager',
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
  { id: 3, name: 'Tailwind CSS', value: 50 },
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
  const [selectedRole, setSelectedRole] = useState<Role | undefined>(undefined);
  const rolelist = callAPIs('role');
  console.log('rolelist =', rolelist);
  return (
    <main className='w-screen h-screen py-6 px-8'>
      <SectionTitle title='Talent Pool' />
      <TalentRoleSelection
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        roles={job}
      ></TalentRoleSelection>
      {/* <h5> {selectedRole?.name || ''}</h5> */}
      <TalentPoolList
        roleSkills={selectedRole?.roleSkills || []}
        talents={Employeelist}
      ></TalentPoolList>
    </main>
  );
}
