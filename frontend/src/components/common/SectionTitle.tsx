import React from 'react';

interface SectionTitleProps {
  title: string;
}
export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className='border-b-2 border-slate-600 mb-2'>
      <h2 className='text-2xl'>{title}</h2>
    </div>
  );
}
