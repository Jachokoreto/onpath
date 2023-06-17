import EmployeeSkill from '@/types/EmployeeSkill';

export function relativeSkillCalculation(
  talentSkills: EmployeeSkill[],
  roleSkills: EmployeeSkill[],
) {
  const percentages = roleSkills.map((roleSkill) => {
    const talentSkillMatch = talentSkills.find(
      (talentSkill) => talentSkill.name === roleSkill.name,
    );

    console.log(talentSkillMatch);
    console.log(roleSkill.value);

    return talentSkillMatch
      ? (talentSkillMatch.value / roleSkill.value) * 100 >= 100
        ? 100
        : Math.floor((talentSkillMatch.value / roleSkill.value) * 100)
      : 0;
  });
  return percentages;
}
