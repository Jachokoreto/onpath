import Employee from '@/types/Employee';
import TalentProfile from './TalentProfile';
import RoleSkill from '@/types/RoleSkill';
import { relativeCareerProgression } from '@/lib/RelativeCareerProgression';

interface TalentPoolProps {
  talents: Employee[];
  roleSkills: RoleSkill[];
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
