'use client';

import ProgressBar from '@/components/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-hot-toast';
import RoleSkill from '@/types/RoleSkill';
import EmployeeSkill from '@/types/EmployeeSkill';

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

interface PrerequisitesProps {
  employeeSkills: EmployeeSkill[];
  roleSkills: RoleSkill[];
}

export default function Prerequisites({
  employeeSkills,
  roleSkills,
}: PrerequisitesProps) {
  return (
    <div className='flex flex-col gap-2'>
      {roleSkills
        .sort((prevRoleSkill, currRoleSkill) => {
          if (prevRoleSkill.name < currRoleSkill.name) {
            return -1;
          } else {
            return 1;
          }
        })
        .map((roleSkill, index) => (
          <div key={index}>
            <PrerequisitesGroup
              title={roleSkill.name}
              level='intermediate'
              requirement={roleSkill.value}
              progress={
                employeeSkills.find(
                  (employeeSkill) => employeeSkill.name === roleSkill.name,
                )?.value ?? 0
              }
            />
            <hr className='h-0.5 bg-slate-200 border-0'></hr>
          </div>
        ))}
    </div>
  );
}
