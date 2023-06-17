import React from 'react';

interface ProgressProps {
  progress: number;
  bgColor: string;
}
export default function Progress({ progress, bgColor }: ProgressProps) {
  return (
    <div className='w-full mt-1 bg-gray-200 rounded-full dark:bg-gray-700'>
      <div
        className={`${bgColor} text-[10px] font-medium text-blue-100 text-center p-0.5 leading-none rounded-full `}
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
}
