import { relativeSkillCalculation } from '@/lib/relativeSkillCalculation';
import EmployeeSkill from '@/types/EmployeeSkill';
import Progress from '@/components/common/Progress';

interface TalentSkillsProps {
  roleSkills: EmployeeSkill[];
  talentSkills: EmployeeSkill[];
}

export default function TalentSkills({
  roleSkills,
  talentSkills,
}: TalentSkillsProps) {
  const percentages = relativeSkillCalculation(talentSkills, roleSkills);

  return (
    <div className='flex flex-col flex-wrap gap-2 flex-1'>
      {roleSkills.map((item, index) => (
        // <Progress
        //   key={index}
        //   color={percentages[index] > 50 ? 'green' : 'red'}
        //   labelProgress
        //   labelText
        //   progress={percentages[index]}
        //   progressLabelPosition='inside'
        //   size='lg'
        //   textLabel={item.name}
        //   textLabelPosition='outside'
        // />
        <div key={index} className=' w-1/2'>
          <p className='text-[10px] w-content'>{item.name}</p>
          <Progress
            // key={index}
            progress={percentages[index]}
            bgColor={
              percentages[index] >= 50 ? 'bg-emerald-500' : 'bg-rose-500'
            }
          />
        </div>
      ))}
    </div>
  );
}
