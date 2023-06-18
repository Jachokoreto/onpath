'use client';
import CareerPathway from '@/components/CareerPathway';
import SideNavbar from '@/components/side-navbar/SideNavbar';
import SkillPool from '@/components/skill-pool/SkillPool';
import Employee from '@/types/Employee';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const [employee, setEmployee] = useState<Employee>();
  const [selected, setSelected] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `http://localhost:4242/api/employee?search_type=ONE&search_number=${params.id}`,
      );
      setEmployee(await data.json());
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <main className='w-screen h-screen flex flex-row'>
      {employee && (
        <SideNavbar
          employee={employee}
          selected={selected}
          setSelected={(selectedID: number) => setSelected(selectedID)}
        />
      )}
      <div className='w-full h-full p-6 flex flex-col'>
        {employee && selected === 1 && (
          <SkillPool employee={employee}></SkillPool>
        )}
        {employee && selected === 2 && <CareerPathway employee={employee} />}
      </div>
    </main>
  );
}
