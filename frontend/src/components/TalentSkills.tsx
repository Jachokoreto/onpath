import { relativeSkillCalculation } from '@/lib/RelativeSkillCalculation';
import RoleSkill from '@/types/RoleSkill';
import { Progress } from 'flowbite-react';

interface TalentSkillsProps {
  roleSkills: RoleSkill[];
  talentSkills: RoleSkill[];
}

export default function TalentSkills({
  roleSkills,
  talentSkills,
}: TalentSkillsProps) {
  const percentages = relativeSkillCalculation(talentSkills, roleSkills);

  return (
    <div className='p-'>
      {roleSkills.map((item, index) => (
        <Progress
          key={index}
          color={percentages[index] > 50 ? 'green' : 'red'}
          labelProgress
          labelText
          progress={percentages[index]}
          progressLabelPosition='inside'
          size='lg'
          textLabel={item.name}
          textLabelPosition='outside'
        />
      ))}
    </div>
  );
}
