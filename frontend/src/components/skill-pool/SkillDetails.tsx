import { Avatar } from 'flowbite-react';

interface SkillDetailsProps {
  skillName: string;
}

export default function SkillDetails({ skillName }: SkillDetailsProps) {
  return (
    <div className='flex flex-wrap gap-2'>
      <h5 className='text-lg font-medium dark:text-white'>{skillName}</h5>
    </div>
  );
}
