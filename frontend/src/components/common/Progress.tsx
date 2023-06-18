import React, { useEffect, useState } from 'react';

interface ProgressProps {
  progress: number;
  bgColor?: string;
}
export default function Progress({ progress, bgColor }: ProgressProps) {
  const [loading, setLoading] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setLoading((prevLoading) => {
  //       if (prevLoading < progress) {
  //         const temp = prevLoading + 10;
  //         if (temp > progress) {
  //           clearInterval(interval);
  //           return prevLoading;
  //         } else {
  //           return prevLoading + 10;
  //         }
  //       } else {
  //         clearInterval(interval);
  //         return prevLoading;
  //       }
  //     });
  //   }, 50);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [progress]);

  useEffect(() => {
    setLoading(0);
    setLoading(progress);
  }, [progress]);

  return (
    <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden'>
      <div
        key={Math.random()}
        className={`${
          bgColor ? (progress > 1 ? bgColor : '') : 'bg-blue-500'
        }  ${
          progress > 1 ? 'text-blue-100' : 'text-slate-700'
        } text-[10px] font-medium  text-center p-0.5 leading-none rounded-full  origin-left animate-[expand_1s_ease-in-out_1]`}
        style={{ width: `${loading}%`, transform: 'translateX(0%)' }}
      >
        {loading}%
      </div>
    </div>
  );
}
