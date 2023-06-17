import Metric from '@/types/Metric';
import { useState } from 'react';

interface SkillProgressProps {
  progress: number;
  metrics: Metric[];
}

export default function SkillProgress({
  progress,
  metrics,
}: SkillProgressProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        console.log('enter');
        setIsHover(true);
      }}
      onMouseLeave={() => {
        console.log('leave');
        setIsHover(false);
      }}
      className='w-full mt-1 bg-gray-200 rounded-full dark:bg-gray-700'
    >
      {isHover ? (
        <div
          className={`bg-blue-500 text-[10px] font-medium text-blue-100 text-center p-0.5 leading-none rounded-full `}
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      ) : (
        <div
          className={`bg-red-500 text-[10px] font-medium text-blue-100 text-center p-0.5 leading-none rounded-full `}
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      )}
    </div>
  );
}
