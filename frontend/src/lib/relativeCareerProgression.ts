import EmployeeSkill from '@/types/EmployeeSkill';
import { relativeSkillCalculation } from './RelativeSkillCalculation';
import RoleSkill from '@/types/RoleSkill';

export function relativeCareerProgression(
  talentSkills: EmployeeSkill[],
  roleSkills: RoleSkill[],
) {
  const matchedSkill = relativeSkillCalculation(talentSkills, roleSkills);
  return Math.floor(
    matchedSkill.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    ) / matchedSkill.length,
  );
}
