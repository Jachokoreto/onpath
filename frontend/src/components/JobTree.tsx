'use client';
import { useCenteredTree } from '@/hooks/useCenteredTree';
import { Button, Card } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import Tree, { CustomNodeElementProps, TreeNodeDatum } from 'react-d3-tree';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: 'CEO',
  children: [
    {
      name: 'Junior Developer',
      attributes: {
        department: 'Tech',
        pathway: 'Frontend',
      },
      children: [
        {
          name: 'Foreman',
          attributes: {
            department: 'Fabrication',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
        {
          name: 'Foreman',
          attributes: {
            department: 'Assembly',
          },
          children: [
            {
              name: 'Worker',
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

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
}: CustomNodeElementProps) => (
  <g>
    {/* <circle r={15}></circle> */}
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject
      width={300}
      height={200}
      className='-translate-y-[75px] -translate-x-[150px]'
    >
      <Card className='w-[300px] h-[150px]  cursor-default'>
        <h5 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
          nodeDatum
        </h5>
        <Button outline>Learn more</Button>
      </Card>
    </foreignObject>
  </g>
);

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
    <div className='w-full h-full ' ref={containerRef}>
      <></>
      <Tree
        data={orgChart}
        translate={translate}
        dimensions={
          ref.current?.getBoundingClientRect() || { width: 0, height: 0 }
        }
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode(rd3tProps)
        }
        nodeSize={{ x: 400, y: 300 }}
        // pathFunc={'straight'}
      />
    </div>
    // </div>
  );
}
