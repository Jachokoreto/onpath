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
      <div className='flex items-center space-x-4'>
        <div className='flex flex-wrap gap-2'>
          <Avatar img='' />
        </div>
        <div className='w-[40%]'>
          <TalentInfo
            employee={employee}
            progress={relativeCareerProgression(
              employee.employeeSkills,
              roleSkills,
            )}
          ></TalentInfo>
        </div>
        <div className='w-[20%]'>
          <TalentSkills
            roleSkills={roleSkills}
            talentSkills={employee.employeeSkills}
          ></TalentSkills>
        </div>
        <div>
          <TalentRoleInterest interest={interest}></TalentRoleInterest>
        </div>
      </div>
    </Card>
  );
}
