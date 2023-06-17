'use client';
import EmployeeSkill from '@/types/EmployeeSkill';
import SkillProfile from './SkillProfile';
import { useEffect, useState } from 'react';

export default function SkillPool() {
  const [skills, setSkills] = useState<EmployeeSkill[]>([]);

  useEffect(() => {
    async function getSkills() {
      const data = await fetch(
        'http://localhost:4242/api/employee?search_type=ONE&search_number=1',
      ).then((res) => res.text());

      console.log(data);

      setSkills(JSON.parse(data));
    }
    getSkills();
  }, []);

  return (
    <div>
      <div className='border-b-2 border-slate-600 mb-2'>
        <h2 className='text-2xl'>Skills</h2>
      </div>
      {skills.map((skill, index) => (
        <SkillProfile key={index} skill={skill}></SkillProfile>
      ))}
    </div>
  );
}
