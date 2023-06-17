'use client';

import { useState, useEffect, RefObject } from 'react';
import { Progress } from 'flowbite-react';
import { Tooltip } from 'flowbite-react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <Tooltip content={Math.round(progress) + '%'}>
      <div>
        <Progress className='w-[200px]' progress={progress} size='sm' />
      </div>
    </Tooltip>
  );
};

// const ProgressBar = ({ progress }: ProgressBarProps) => {
//   const [progressLoad, setProgressLoad] = useState(0);
//   const fillWidth = `${progress}%`;

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setProgressLoad((prevProgressLoad) => {
//         const newProgressLoad = prevProgressLoad + 1;
//         if (newProgressLoad >= progress) {
//           clearInterval(timer);
//         }
//         return newProgressLoad;
//       });
//     }, 100);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className='flex w-full rounded-full items-center justify-content bg-slate-200'>
//       <div
//         className={`w-${progress}% transition-all h-2 rounded-lg bg-red-500`}
//       >
//         {/* <div className='flex h-4 w-4 rounded-full bg-red-500 float-right -mt-[4px] -mr-[8px] text-black items-center justify-center'> */}
//         <Tooltip content={progress + '%'}>
//           <div></div>
//         </Tooltip>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

export default ProgressBar;
