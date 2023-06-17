'use client';
import { useCenteredTree } from '@/hooks/useCenteredTree';
import { Card, Progress } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import Tree, { CustomNodeElementProps } from 'react-d3-tree';
import JobDetailsModal from './job-details-overlay/JobDetailsModal';
import getRoleTree from '@/lib/getRoleTree';
import { relativeCareerProgression } from '@/lib/RelativeCareerProgression';
import Employee from '@/types/Employee';
import Role from '@/types/Role';

interface MyCustomNode extends CustomNodeElementProps {
  employee: Employee;
  roles: Role[];
}

const RenderForeignObjectNode = ({
  nodeDatum,
  employee,
  roles,
}: MyCustomNode) => {
  // const isCurrent = employee.role.id === nodeDatum?.attributes?.id;

  return (
    <g>
      <foreignObject
        width={300}
        height={150}
        className='-translate-y-[75px] -translate-x-[150px]'
      >
        <Card
        // className={`w-[300px] h-[150px] cursor-default ${
        //   isCurrent && 'border-2 border-emerald-600 '
        // }`}
        >
          {/* {isCurrent && (
            <p className='text-xs absolute font-bold top-2 left-2 text-emerald-600/50'>
              Current
            </p>
          )} */}
          {nodeDatum ? (
            <div className='h-full flex flex-col'>
              <h5 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2'>
                {/* {nodeDatum?.attributes?.name} */}
              </h5>
              {/* <Progress
                progress={relativeCareerProgression(
                  employee.employeeSkills,
                  roles.find(
                    (r) => r.id === (nodeDatum.attributes?.id as number),
                  )?.roleSkills,
                )}
                size={'sm'}
                className={isCurrent ? 'opacity-30' : ''}
              /> */}
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

interface JobTreeProps {
  employee: Employee;
}

export default function JobTree({ employee }: JobTreeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [translate, containerRef] = useCenteredTree();

  const [isHydration, setIsHydration] = useState(false);

  const [roles, setRoles] = useState<Role[]>([]);
  const [roleTree, setRoleTree] = useState([]);

  useEffect(() => {
    setIsHydration(true);
  }, []);

  useEffect(() => {
    async function getRoles() {
      const data = await fetch(
        'http://localhost:4242/api/role?search_type=PATHWAY&search_number=1',
      ).then((res) => res.text());

      const parsed = await JSON.parse(data);

      setRoles(parsed);
      setRoleTree(getRoleTree(parsed));
    }
    getRoles();
  }, []);

  if (isHydration === false) return <></>;

  return (
    <div
      className='w-full h-full border-2 rounded-lg border-slate-500'
      ref={containerRef}
    >
      <Tree
        data={roleTree}
        translate={translate}
        dimensions={
          ref.current?.getBoundingClientRect() || { width: 0, height: 0 }
        }
        renderCustomNodeElement={(rd3tProps) =>
          RenderForeignObjectNode({ ...rd3tProps, employee, roles })
        }
        nodeSize={{ x: 400, y: 300 }}
      />
    </div>
  );
}
