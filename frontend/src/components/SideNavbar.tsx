import { Button, Card } from 'flowbite-react';
import React from 'react';

export default function SideNavbar() {
  return (
    <div className='w-80 h-full border-r border-gray-300 py-4 px-3 flex flex-col gap-6'>
      <h2 className='text-2xl font-bold'>OnPath</h2>
      <Card>
        <p>username</p>
        <p>Current Role</p>
      </Card>
      <div className='flex flex-col gap-2'>
        <p className='text-slate-400 text-sm'>Views</p>
        <Button className='w-full'>Dashboard</Button>
        <Button className='w-full'>Career Pathway</Button>
      </div>
    </div>
  );
}
