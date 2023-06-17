'use client';

import React, { useEffect, useState } from 'react';
import styles from '@/styles/ProgressBar.module.css';
import { Progress } from 'flowbite-react';
import { Tooltip } from 'flowbite-react';

interface ProgressBarProps {
  progress: number;
}

interface LoadProgressBarProps {
  load: number;
}

const LoadProgressBar = ({ load }: LoadProgressBarProps) => {
  return (
    <Tooltip content={Math.round(load) + '%'}>
      <div className='flex w-[200px] h-2 rounded-full items-center justify-content bg-slate-200'>
        {/* <Progress className='w-[200px]' progress={progress} size='sm' /> */}
        <div className={styles.progressBar} style={{ width: `${load}%` }}></div>
      </div>
    </Tooltip>
  );
};

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prevLoading) => {
        if (prevLoading < progress) {
          const temp = prevLoading + 10;
          if (temp > progress) {
            clearInterval(interval);
            return prevLoading;
          } else {
            return prevLoading + 10;
          }
        } else {
          clearInterval(interval);
          return prevLoading;
        }
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <LoadProgressBar load={loading} />
    </div>
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
