'use client';
import CareerPathway from '@/components/CareerPathway';
import SideNavbar from '@/components/side-navbar/SideNavbar';
import Employee from '@/types/Employee';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

export default function Page({ params }: { params: { id: string } }) {
  const [employee, setEmployee] = useState<Employee>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `http://localhost:4242/api/employee?search_type=ONE&search_number=${params.id}`,
      );
      setEmployee(await data.json());
    };

    fetchData().catch(console.error);
  }, [params]);

  return (
    <main className='w-screen h-screen flex flex-row'>
      <Toaster position='top-right' reverseOrder={false} />
      {employee && <SideNavbar employee={employee} />}
      <div className='w-full h-full p-6 flex flex-col'>
        <CareerPathway />
      </div>
    </main>
  );
}
