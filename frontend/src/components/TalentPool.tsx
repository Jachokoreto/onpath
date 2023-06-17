import Employee from '@/types/Employee';
import TalentProfile from './TalentProfile';
import EmployeeSkill from '@/types/EmployeeSkill';
import { relativeCareerProgression } from '@/lib/relativeCareerProgression';

interface TalentPoolProps {
  talents: Employee[];
  roleSkills: EmployeeSkill[];
}

export default function TalentPoolList({
  talents,
  roleSkills,
}: TalentPoolProps) {
  talents.sort(
    (prevTalent, currTalent) =>
      relativeCareerProgression(currTalent.employeeSkill, roleSkills) -
      relativeCareerProgression(prevTalent.employeeSkill, roleSkills),
  );

  return (
    <div className='flex flex-col gap-4 mt-4'>
      {talents.map((item, index) => (
        <TalentProfile
          key={index}
          talent={item}
          roleSkills={roleSkills}
        ></TalentProfile>
      ))}
      <li></li>
    </div>
  );
}
