import Employee from '@/types/Employee';
import { Avatar, Card } from 'flowbite-react';
import TalentInfo from './TalentInfo';
import TalentSkills from './TalentSkills';
import EmployeeSkill from '@/types/EmployeeSkill';
import { relativeCareerProgression } from '@/lib/relativeCareerProgression';
import TalentRoleInterest from './TalentRoleInterest';

interface TalentProfileProps {
  employee: Employee;
  roleSkills: EmployeeSkill[];
  interest: boolean;
}

export default function TalentProfile({
  employee,
  roleSkills,
  interest,
}: TalentProfileProps) {
  return (
    <Card>
      <div className='flex items-center gap-6'>
        <Avatar size='lg' rounded />
        <div className='w-[40%]'>
          <TalentInfo
            employee={employee}
            progress={relativeCareerProgression(
              employee.employeeSkills,
              roleSkills,
            )}
          ></TalentInfo>
        </div>
        <TalentSkills
          roleSkills={roleSkills}
          talentSkills={employee.employeeSkills}
        ></TalentSkills>
        <div>
          <TalentRoleInterest interest={interest}></TalentRoleInterest>
        </div>
      </div>
    </Card>
  );
}
