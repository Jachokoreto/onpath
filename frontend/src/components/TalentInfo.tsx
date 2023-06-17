import Employee from '@/types/Employee';
import { Avatar, Progress } from 'flowbite-react';

interface employeeInfoProps {
  employee: Employee;
  progress: number;
}
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
  );
}
