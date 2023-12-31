'use client';

import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import Prerequisites from './Prerequisites';
import RoleSkill from '@/types/RoleSkill';
import EmployeeSkill from '@/types/EmployeeSkill';

interface JobDetailsModalProps {
  employeeSkills: EmployeeSkill[];
  roleSkills: RoleSkill[];
}

export default function JobDetailsModal({
  employeeSkills,
  roleSkills,
}: JobDetailsModalProps) {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button
        color={'gray'}
        size={'xs'}
        className='w-full mt-auto'
        onClick={() => props.setOpenModal('dismissible')}
      >
        Learn more {'>'}
      </Button>
      <Modal
        size='6xl'
        dismissible
        show={props.openModal === 'dismissible'}
        onClose={() => props.setOpenModal(undefined)}
      >
        <div className='flex flex-col px-6 py-5 gap-4'>
          <h2 className='text-2xl font-medium'>Job title</h2>
          <hr className='h-0.5 bg-black'></hr>
          <div className='flex gap-3'>
            <div className='flex flex-col w-full gap-2'>
              <p className='text-lg text-zinc-400 font-medium'>
                Job description
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Massa sed in adipiscing
                porta scelerisque aliquam vivamus tristique eget. Quis sit nunc
                nibh eget.
              </p>
            </div>
            <div className='flex flex-col w-full gap-2'>
              <p className='text-lg text-zinc-400 font-medium'>Prerequisites</p>
              {props.openModal && (
                <Prerequisites
                  employeeSkills={employeeSkills}
                  roleSkills={roleSkills}
                />
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
