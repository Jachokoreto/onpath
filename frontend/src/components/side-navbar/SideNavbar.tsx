import { Button, Card } from 'flowbite-react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { tech } from '@/components/side-navbar/RadarChartData';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

export const SkillGraph = () => {
  return (
    <div
      data-testid='flowbite-card'
      className='flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col w-full h-full p-4'
    >
      <div className='flex flex-col w-full h-full items-center justify-center gap-1'>
        <ResponsiveContainer
          width='100%'
          height='100%'
          className='text-[8px] mx-2'
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
      </div>
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

export const Navigation = () => {
  return (
    <div className='flex flex-col gap-1'>
      <p className='text-slate-400 text-sm'>Views</p>
      <div className='flex gap-2'>
        <Button outline className='w-full'>
          Dashboard
        </Button>
        <Button outline className='w-full'>
          Career Pathway
        </Button>
      </div>
    </div>
  );
};

export default function SideNavbar() {
  return (
    <div className='w-[30vw] h-full border-r border-gray-300 py-5 px-6 flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>OnPath</h2>
      <Navigation />
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
