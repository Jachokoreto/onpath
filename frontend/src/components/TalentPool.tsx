import Employee from '@/types/Employee';
import TalentProfile from './TalentProfile';
import EmployeeSkill from '@/types/EmployeeSkill';
import { relativeCareerProgression } from '@/lib/relativeCareerProgression';
import { useEffect, useState } from 'react';
import { callAPIs } from '@/lib/callAPI';
import Role from '@/types/Role';

interface TalentPoolProps {
  employees: Employee[];
  roleSkills: EmployeeSkill[];
  interest: boolean;
  role: Role | undefined;
}

export default function TalentPoolList({
  employees,
  roleSkills,
  interest,
  role,
}: TalentPoolProps) {
  const [roleInterest, setRoleInterest] = useState([]);
  const [interestedEmployees, setInterestedEmployees] = useState<Employee[]>(
    [],
  );
  employees.sort(
    (prevTalent, currTalent) =>
      relativeCareerProgression(currTalent.employeeSkills, roleSkills) -
      relativeCareerProgression(prevTalent.employeeSkills, roleSkills),
  );
  // if (interest === true)
  //   employees.filter((employee) => roleInterest.find(employee.id) != undefined);
  useEffect(() => {
    async function getRoleInterest() {
      if (!role) return;
      const roleImpression = await callAPIs(
        `employee-role-impression?search_type=ROLE&search_number=${role.id}`,
      );
      if (roleImpression) {
        const data = JSON.parse(roleImpression);
        setRoleInterest(data);
        setInterestedEmployees(data.map((d: any) => d.employee));
      }
    }
    getRoleInterest();
  }, []);

  console.log(employees);
  console.log(interestedEmployees);
  console.log(
    employees.filter((e) =>
      interestedEmployees.some((ie) => {
        return ie.id === e.id;
      }),
    ),
  );
  return (
    <div>
      {interest === true ? (
        <>
          {employees
            .filter((e) => interestedEmployees.some((ie) => ie.id === e.id))
            .map((item, index) => (
              <TalentProfile
                key={index}
                employee={item}
                roleSkills={roleSkills}
                interest={true}
              ></TalentProfile>
            ))}
        </>
      ) : (
        <>
          {employees.map((item, index) => (
            <TalentProfile
              key={index}
              employee={item}
              roleSkills={roleSkills}
              interest={
                interestedEmployees.some((e) => e.id === item.id) ? true : false
              }
            ></TalentProfile>
          ))}
        </>
      )}
      <li></li>
    </div>
  );
}
