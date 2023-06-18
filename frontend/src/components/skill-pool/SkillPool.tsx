'use client';
import SkillProfile from './SkillProfile';
import { useEffect, useState } from 'react';
import Employee from '@/types/Employee';
import Metric from '@/types/Metric';

interface SkillPoolProps {
  employee: Employee;
}

export default function SkillPool({ employee }: SkillPoolProps) {
  const [metrics, setMetrics] = useState<Metric[]>([]);

  useEffect(() => {
    async function getMetrics() {
      const data = await fetch(
        `http://localhost:4242/api/metric?search_type=EMPLOYEE&search_number=${employee.id}`,
      ).then((res) => res.text());

      setMetrics(JSON.parse(data));
    }
    getMetrics();
  }, []);

  return (
    <div>
      <div className='border-b-2 border-slate-600 mb-2'>
        <h2 className='text-2xl'>Skills</h2>
      </div>
      {employee.employeeSkills.map((skill, index) => (
        <SkillProfile
          key={index}
          skill={skill}
          metrics={metrics.filter(
            (metric) => metric.employeeSkill.id === skill.id,
          )}
        ></SkillProfile>
      ))}
    </div>
  );
}
