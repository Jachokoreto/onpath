'use client';
import { useCenteredTree } from '@/hooks/useCenteredTree';
import { Button, Card } from 'flowbite-react';
import React from 'react';
import Tree, { CustomNodeElementProps } from 'react-d3-tree';

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
          Job title
        </h5>
        <Button outline>Learn more</Button>
      </Card>
    </foreignObject>
  </g>
);

export default function JobTree() {
  const [translate, containerRef] = useCenteredTree();
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div className='w-full h-full' ref={containerRef}>
      {/* <p>Hello there
      </p> */}
      <Tree
        data={orgChart}
        translate={translate}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode(rd3tProps)
        }
        nodeSize={{ x: 400, y: 300 }}
        pathFunc={'straight'}
      />
    </div>
  );
}
