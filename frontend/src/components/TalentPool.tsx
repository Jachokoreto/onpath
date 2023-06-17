import Employee from '@/types/Employee';
import TalentProfile from './TalentProfile';
import EmployeeSkill from '@/types/EmployeeSkill';
import { relativeCareerProgression } from '@/lib/relativeCareerProgression';

interface TalentPoolProps {
  talents: Employee[];
  roleSkills: EmployeeSkill[];
  interest: boolean;
}

export default function TalentPoolList({
  talents,
  roleSkills,
  interest,
}: TalentPoolProps) {
  talents.sort(
    (prevTalent, currTalent) =>
      relativeCareerProgression(currTalent.employeeSkills, roleSkills) -
      relativeCareerProgression(prevTalent.employeeSkills, roleSkills),
  );
  // talents.filter((interest) => interest);
  return (
    <div>
      {talents.map((item, index) => (
        <TalentProfile talent={item} roleSkills={roleSkills}></TalentProfile>
      ))}
      <li></li>
    </div>
  );
}
