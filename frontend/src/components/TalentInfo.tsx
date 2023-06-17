import Employee from '@/types/Employee';
import { Avatar, Progress } from 'flowbite-react';

interface TalentInfoProps {
  talent: Employee;
  progress: number;
}
export default function TalentInfo({ talent, progress }: TalentInfoProps) {
  return (
    <div>
      <h5 className='text-lg font-medium dark:text-white'>{talent.name}</h5>
      <div className='p-4'>
        <Progress
          color='indigo'
          labelProgress
          progress={progress}
          progressLabelPosition='inside'
          size='lg'
        />
      </div>
    </div>
  );
}
