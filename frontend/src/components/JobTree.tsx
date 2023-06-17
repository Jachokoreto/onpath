'use client';
import { useCenteredTree } from '@/hooks/useCenteredTree';
import { Button, Card, Progress } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import Tree, { CustomNodeElementProps, TreeNodeDatum } from 'react-d3-tree';
import JobDetailsModal from './job-details-overlay/JobDetailsModal';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: 'Entry Developer',
  children: [
    {
      name: 'Junior Frontend Developer',
      attributes: {
        eligilibility: 100,
        current: 'true',
      },
      children: [
        {
          name: 'Senior Frontend Developer',
          attributes: {
            eligilibility: 44,
          },
          children: [
            {
              name: 'CTO',
            },
          ],
        },
        {
          name: 'Fullstack Developer',
          attributes: {},
          children: [
            {
              name: 'Tech Team Lead',
            },
          ],
        },
      ],
    },
  ],
};

// interface CustomTreeNodeDatum extends TreeNodeDatum {
//   attributes?: {
//     roleTitle: string;
//     roleId: number;
//   };
// }

const RenderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
}: CustomNodeElementProps) => {
  // const [isCurrent, setIsCurrent] = useState(false);
  const isCurrent =
    nodeDatum && nodeDatum.attributes && nodeDatum.attributes.current;

  return (
    <g>
      {/* <circle r={15}></circle> */}
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject
        width={300}
        height={150}
        className='-translate-y-[75px] -translate-x-[150px]'
      >
        <Card
          className={`w-[300px] h-[150px] cursor-default ${
            isCurrent && 'border-2 border-emerald-600 '
          }`}
        >
          {isCurrent && (
            <p className='text-xs absolute font-bold top-2 left-2 text-emerald-600/50'>
              Current
            </p>
          )}
          {nodeDatum && nodeDatum.attributes ? (
            <div className='h-full flex flex-col'>
              <h5 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2'>
                {nodeDatum.name}
              </h5>
              <Progress
                progress={nodeDatum.attributes.eligilibility as number}
                size={'sm'}
                className={isCurrent ? 'opacity-30' : ''}
              />
              <JobDetailsModal />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Card>
      </foreignObject>
    </g>
  );
};

export default function JobTree() {
  const ref = useRef<HTMLDivElement>(null);
  const [translate, containerRef] = useCenteredTree();

  const [isHydration, setIsHydration] = useState(false);

  useEffect(() => {
    setIsHydration(true);
  }, []);

  if (isHydration === false) return;
  return (
    // <div className='w-full h-full border border-gray-700 rounded p-2'>
    <div
      className='w-full h-full border-2 rounded-lg border-slate-500'
      ref={containerRef}
    >
      <></>
      <Tree
        data={orgChart}
        translate={translate}
        dimensions={
          ref.current?.getBoundingClientRect() || { width: 0, height: 0 }
        }
        renderCustomNodeElement={(rd3tProps) =>
          RenderForeignObjectNode(rd3tProps)
        }
        nodeSize={{ x: 400, y: 300 }}
        // pathFunc={'straight'}
      />
    </div>
    // </div>
  );
}
