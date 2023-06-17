'use client';

import ProgressBar from '@/components/ProgressBar';
import { faBook, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, Toaster } from 'react-hot-toast';

interface PrerequisitesGroupProps {
  title: string;
  level: string;
  requirement: number;
  progress: number;
}

export const PrerequisitesGroup = ({
  title,
  level,
  requirement,
  progress,
}: PrerequisitesGroupProps) => {
  const delta = requirement - progress;

  const handleRegisterInterest = () => {
    toast.success('Interest registered suceessfully');
  };

  return (
    <div className='flex items-center'>
      <div className='w-40'>
        <p className='text-lg break-words'>{title}</p>
        <p className='text-sm text-slate-500 break-words'>{level}</p>
      </div>
      <div className='flex flex-col flex-1 gap-0.5'>
        <ProgressBar
          progress={delta > 0 ? (progress / requirement) * 100 : 100}
        />
      </div>
      <div className='flex w-40 items-center justify-end'>
        <button onClick={() => handleRegisterInterest()}>
          <FontAwesomeIcon icon={faBook} size='lg' />
        </button>
      </div>
    </div>
  );
};

const Prerequisites = () => {
  return (
    <div className='flex flex-col gap-2'>
      <PrerequisitesGroup
        title='React'
        level='intermediate'
        requirement={60}
        progress={30}
      />
      <hr className='h-0.5 bg-slate-200 border-0'></hr>
      <PrerequisitesGroup
        title='C'
        level='advanced'
        requirement={80}
        progress={70}
      />
      <hr className='h-0.5 bg-slate-200 border-0'></hr>
      <PrerequisitesGroup
        title='C++'
        level='advanced'
        requirement={80}
        progress={85}
      />
      <hr className='h-0.5 bg-slate-200 border-0'></hr>
    </div>
  );
};

export default Prerequisites;
