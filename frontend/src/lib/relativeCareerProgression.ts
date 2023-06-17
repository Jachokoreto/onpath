import EmployeeSkill from '@/types/EmployeeSkill';
import { relativeSkillCalculation } from './relativeSkillCalculation';

export function relativeCareerProgression(
  talentSkills: EmployeeSkill[],
  roleSkills: EmployeeSkill[],
) {
  const matchedSkill = relativeSkillCalculation(talentSkills, roleSkills);
  return Math.floor(
    matchedSkill.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    ) / matchedSkill.length,
  );
}
