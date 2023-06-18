'use client';
import CareerPathway from '@/components/CareerPathway';
import SideNavbar from '@/components/SideNavbar';
import SkillPool from '@/components/skill-pool/SkillPool';
import { Button } from 'flowbite-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-screen h-screen flex flex-row'>
      <Link href={'/talentpool'}>
        <Button
          className='absolute top-1 right-1'
          color={'warning'}
          size={'xs'}
        >
          Employer
        </Button>
      </Link>
      <SideNavbar />
      <div className='w-full h-full p-6 flex flex-col'>
        {/* <CareerPathway /> */}
      </div>
    </main>
  );
}
