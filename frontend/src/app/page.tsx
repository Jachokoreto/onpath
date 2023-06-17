'use client';
import CareerPathway from '@/components/CareerPathway';
import SideNavbar from '@/components/SideNavbar';
import { Button } from 'flowbite-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-screen h-screen flex flex-row'>
      <SideNavbar />
      <div className='w-full h-full p-6 flex flex-col'>
        <CareerPathway />
      </div>
    </main>
  );
}
