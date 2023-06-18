import Metric from '@/types/Metric';
import { Tooltip } from 'flowbite-react';
import { useState } from 'react';

function getColor(type: string) {
  switch (type) {
    case 'Certificate':
      return 'bg-pink-500';
    case 'Qualification':
      return 'bg-amber-300';
    case 'Work Experience':
      return 'bg-green-400';
    case 'Personal Project':
      return 'bg-light-blue-600';
  }
}

interface SkillProgressProps {
  progress: number;
  metrics: Metric[];
}

export default function SkillProgress({
  progress,
  metrics,
}: SkillProgressProps) {
  const [isHover, setIsHover] = useState(false);
  const types = [
    'Work Experience',
    'Certificate',
    'Qualification',
    'Personal Project',
  ];
  const weightages = [40, 30, 20, 10];

  console.log(metrics);

  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className='flex flex-row flex-l w-full mt-1 bg-gray-200 rounded-full dark:bg-gray-700'
    >
      {isHover ? (
        types.map((type, index) => {
          const metricWeightage = weightages[index];
          const metricValue = metrics.reduce(
            (total, metric) =>
              metric.type === type
                ? total + metric.value * (metricWeightage / 10)
                : total,
            0,
          );

          return metricValue > 0 ? (
            <div
              key={index}
              className={`${getColor(
                type,
              )} text-[10px] font-medium text-blue-100 text-center p-0.5 leading-none`}
              style={{
                width: `${metricValue}%`,
              }}
            >
              {`${metricValue}%`}
            </div>
          ) : (
            <></>
          );
        })
      ) : (
        <div
          className={`bg-blue-500 text-[10px] font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      )}
    </div>
  );
}
