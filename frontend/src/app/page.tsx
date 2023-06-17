'use client';
import JobTree from '@/components/JobTree';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <main className='w-screen h-screen flex flex-row test'>
      <Sidebar />
      <div className='w-full h-full border border-gray-700'>
        <JobTree />
      </div>
    </main>
  );
}
