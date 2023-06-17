import React from 'react';
import JobTree from '@/components/JobTree';
import Employee from '@/types/Employee';

interface CareerPathwayProps {
  employee: Employee;
}

export default function CareerPathway({ employee }: CareerPathwayProps) {
  return (
    <>
      <div className='border-b-2 border-slate-600 mb-2'>
        <h2 className='text-2xl'>Career Pathway</h2>
      </div>

      {/* <JobSeletion /> */}

      <JobTree employee={employee} />
    </>
  );
}
