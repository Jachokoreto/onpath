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
    <div>
      {talents.map((item, index) => (
        <TalentProfile talent={item} roleSkills={roleSkills}></TalentProfile>
      ))}
      <li></li>
    </div>
  );
}
