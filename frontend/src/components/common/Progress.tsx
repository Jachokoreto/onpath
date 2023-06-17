import React from 'react';

interface ProgressProps {
  progress: number;
  bgColor?: string;
}
export default function Progress({ progress, bgColor }: ProgressProps) {
  console.log('progress', progress);
  return (
    <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
      <div
        className={`${
          bgColor ? (progress > 1 ? bgColor : '') : 'bg-blue-500'
        } text-[10px] font-medium  text-center p-0.5 leading-none rounded-full ${
          progress > 1 ? 'text-blue-100' : 'text-slate-700'
        } `}
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
}
