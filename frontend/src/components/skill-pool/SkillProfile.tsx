import EmployeeSkill from '@/types/EmployeeSkill';
import Progress from '../common/Progress';
import SkillDetails from './SkillDetails';
import { Card } from 'flowbite-react';
import SkillProgress from './SkillProgress';

interface SkillProfileProps {
  skill: EmployeeSkill;
}

export default function SkillProfile({ skill }: SkillProfileProps) {
  return (
    <Card>
      <div className='flex items-center space-x-4'>
        <SkillDetails skillName={skill.name}></SkillDetails>
      </div>
      <div className='items-center'>
        <SkillProgress
          progress={skill.value * 10}
          metrics={skill.metrics}
        ></SkillProgress>
      </div>
    </Card>
  );
}
