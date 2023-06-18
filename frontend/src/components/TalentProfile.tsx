import Employee from '@/types/Employee';
import { Avatar, Card } from 'flowbite-react';
import TalentInfo from './TalentInfo';
import TalentSkills from './TalentSkills';
import EmployeeSkill from '@/types/EmployeeSkill';
import { relativeCareerProgression } from '@/lib/RelativeCareerProgression';

interface TalentProfileProps {
  talent: Employee;
  roleSkills: EmployeeSkill[];
}

export default function TalentProfile({
  talent,
  roleSkills,
}: TalentProfileProps) {
  return (
    <Card>
      <div className='flex items-center space-x-4'>
        <div className='flex flex-wrap gap-2'>
          <Avatar img='' />
        </div>
        <div className='w-[40%]'>
          <TalentInfo
            talent={talent}
            progress={relativeCareerProgression(
              talent.employeeSkills,
              roleSkills,
            )}
          ></TalentInfo>
        </div>
        <div className='w-[20%]'>
          <TalentSkills
            roleSkills={roleSkills}
            talentSkills={talent.employeeSkills}
          ></TalentSkills>
        </div>
      </div>
    </Card>
  );
}
