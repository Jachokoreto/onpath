'use client';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import React from 'react';
import path from 'path';

export default function PovButton() {
  const pathname = usePathname();
  const isEmployer = ['/talentpool'].find((x) => x === pathname);

  return (
    <Link href={isEmployer ? '/1' : '/talentpool'}>
      <Button className='absolute top-1 right-1' color={'warning'} size={'xs'}>
        {isEmployer ? 'Employee' : 'Employer'}
      </Button>
    </Link>
  );
}
