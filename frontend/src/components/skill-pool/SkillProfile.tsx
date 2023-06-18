import EmployeeSkill from '@/types/EmployeeSkill';
import Progress from '../common/Progress';
import SkillDetails from './SkillDetails';
import { Card } from 'flowbite-react';
import SkillProgress from './SkillProgress';
import Metric from '@/types/Metric';

interface SkillProfileProps {
  skill: EmployeeSkill;
  metrics: Metric[];
}

export default function SkillProfile({ skill, metrics }: SkillProfileProps) {
  return (
    <Card>
      <div className='flex items-center space-x-4'>
        <SkillDetails skillName={skill.name}></SkillDetails>
      </div>
      <div className='items-center'>
        <SkillProgress
          progress={skill.value * 10}
          metrics={metrics}
        ></SkillProgress>
      </div>
    </Card>
  );
}
