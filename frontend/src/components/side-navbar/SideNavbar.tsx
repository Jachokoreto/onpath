'use client';

import { Button, Card, Pagination } from 'flowbite-react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { tech } from '@/components/side-navbar/RadarChartData';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

interface DisplayGraphProps {
  graphPage: number;
}

export const DisplayGraph = ({ graphPage }: DisplayGraphProps) => {
  return (
    <div className='flex flex-col w-full h-full items-center justify-center gap-1'>
      {graphPage === 1 ? (
        <ResponsiveContainer
          width='100%'
          height='100%'
          className='text-[10px] mx-2'
        >
          <RadarChart cx='50%' cy='50%' outerRadius='80%' data={tech}>
            <PolarGrid />
            <PolarAngleAxis dataKey='subject' />
            <Radar
              name='user'
              dataKey='A'
              stroke='#0e7490'
              fill='#0e7490'
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer
          width='100%'
          height='100%'
          className='text-[10px] mx-2'
        >
          <RadarChart cx='50%' cy='50%' outerRadius='80%' data={tech}>
            <PolarGrid />
            <PolarAngleAxis dataKey='subject' />
            <Radar
              name='user'
              dataKey='A'
              stroke='#0e9062'
              fill='#0e9062'
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export const SkillGraph = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div
      data-testid='flowbite-card'
      className='flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col w-full h-full p-4 items-center'
    >
      <DisplayGraph graphPage={currentPage} />
      <Pagination
        currentPage={currentPage}
        layout='navigation'
        nextLabel='Soft skills'
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
        previousLabel='Tech skills'
        showIcons
        totalPages={2}
      />
    </div>
  );
};

export const ProfileCard = () => {
  return (
    <Card className='w-full'>
      <div className='flex flex-col w-full h-full items-center justify-center gap-1'>
        <div className='flex w-28 h-28 rounded-full bg-slate-200 items-center justify-center'>
          <FontAwesomeIcon icon={faUser} size='2xl' />
        </div>
        <p className='text-slate-400 text-sm text-center'>Current role</p>
        <p className='text-md mx-4 break-words text-center'>Junior Developer</p>
      </div>
    </Card>
  );
};

interface NavigationProps {
  selected: number;
  setSelected: (selected: number) => void;
}

export const Navigation = ({ selected, setSelected }: NavigationProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <p className='text-slate-400 text-sm'>Views</p>
      <div className='flex gap-2'>
        <Button outline className='w-full' onClick={() => setSelected(1)}>
          Dashboard
        </Button>
        <Button outline className='w-full' onClick={() => setSelected(2)}>
          Career Pathway
        </Button>
      </div>
    </div>
  );
};

interface SideNavbarProps {
  selected: number;
  setSelected: (selected: number) => void;
}

export default function SideNavbar({ selected, setSelected }: SideNavbarProps) {
  return (
    <div className='w-[30vw] h-full border-r border-gray-300 py-5 px-6 flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>OnPath</h2>
      <Navigation selected={selected} setSelected={setSelected} />
      <ProfileCard />
      <SkillGraph />
    </div>
  );
}

// export default function SideNavbar() {
//   return (
//     <div className='w-80 h-full border-r border-gray-300 py-6 px-8 flex flex-col gap-6'>
//       <h2 className='text-2xl font-bold'>OnPath</h2>
//       <Card>
//         <p>username</p>
//         <p>Current Role</p>
//       </Card>
//       <div className='flex flex-col gap-2'>
//         <p className='text-slate-400 text-sm'>Views</p>
//         <Button className='w-full'>Dashboard</Button>
//         <Button className='w-full'>Career Pathway</Button>
//       </div>
//     </div>
//   );
// }
