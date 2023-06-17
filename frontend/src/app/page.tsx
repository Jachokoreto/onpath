'use client';
import CareerPathway from '@/components/CareerPathway';
import SideNavbar from '@/components/side-navbar/SideNavbar';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main className='w-screen h-screen flex flex-row'>
      <Toaster position='top-right' reverseOrder={false} />;
      <SideNavbar />
      <div className='w-full h-full p-6 flex flex-col'>
        <CareerPathway />
      </div>
    </main>
  );
}
