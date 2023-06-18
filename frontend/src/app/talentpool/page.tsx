'use client';

import TalentPoolList from '@/components/TalentPool';
import TalentRoleInterest from '@/components/TalentInterestFilter';
import TalentRoleSelection from '@/components/TalentRoleSelection';
import SectionTitle from '@/components/common/SectionTitle';
import { callAPIs } from '@/lib/callAPI';
import Employee from '@/types/Employee';
import EmployeeSkill from '@/types/EmployeeSkill';
import Role from '@/types/Role';
import { useEffect, useState } from 'react';
import TalentInterestFilter from '@/components/TalentInterestFilter';

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<Role | undefined>(undefined);
  const [interestFilter, setInterestFilter] = useState(false);
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
    <main className='w-screen h-screen py-6 px-8'>
      <SectionTitle title='Talent Pool' />
      <div className='flex items-center space-x-4 mt-4 py-2 px-4 bg-slate-100 rounded text-sm'>
        <TalentRoleSelection
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          roles={roles}
        />
        <TalentInterestFilter
          InterestFilter={interestFilter}
          setInterestFilter={setInterestFilter}
        />
      </div>
      {employees && (
        <TalentPoolList
          roleSkills={selectedRole?.roleSkills || []}
          employees={employees}
          interest={interestFilter}
          role={selectedRole || undefined}
        ></TalentPoolList>
      )}
    </main>
  );
}
