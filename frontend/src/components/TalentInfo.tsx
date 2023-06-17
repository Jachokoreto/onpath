import Employee from '@/types/Employee';
import { useEffect, useState } from 'react';
import Progress from '@/components/common/Progress';

interface employeeInfoProps {
  employee: Employee;
  progress: number;
}
<<<<<<< HEAD
export default function TalentInfo({ talent, progress }: TalentInfoProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progress);
  }, [progress]);

  return (
    <>
      <h5 className='text-lg font-medium dark:text-white'>{talent.name}</h5>
      {progress ? (
        <>
          <p className='text-sm text-slate-400 mt-2 mb-1'>Eligibility</p>
          <Progress progress={progress} bgColor='bg-blue-500' />
        </>
      ) : (
        <></>
      )}
    </>
=======
export default function employeeInfo({
  employee,
  progress,
}: employeeInfoProps) {
  return (
    <div>
      <h5 className='text-lg font-medium dark:text-white'>{employee.name}</h5>
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
>>>>>>> main
  );
}
