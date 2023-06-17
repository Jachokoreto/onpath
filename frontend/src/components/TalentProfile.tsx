import Employee from '@/types/Employee';
import { Avatar, Card } from 'flowbite-react';
import TalentInfo from './TalentInfo';
import TalentSkills from './TalentSkills';
import EmployeeSkill from '@/types/EmployeeSkill';
import { relativeCareerProgression } from '@/lib/relativeCareerProgression';

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
      <div className='flex items-center gap-6'>
        <Avatar size='lg' rounded />
        <div className='w-[40%]'>
          <TalentInfo
            talent={talent}
            progress={relativeCareerProgression(
              talent.employeeSkill,
              roleSkills,
            )}
          ></TalentInfo>
        </div>
        <TalentSkills
          roleSkills={roleSkills}
          talentSkills={talent.employeeSkill}
        ></TalentSkills>
      </div>
    </Card>
  );
}
