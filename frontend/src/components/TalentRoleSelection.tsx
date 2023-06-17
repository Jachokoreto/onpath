import { Role } from '@/types/Role';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface TalentRoleSelectionProps {
  roles: Role[];
  selectedRole: Role | undefined;
  setSelectedRole: Dispatch<SetStateAction<Role | undefined>>;
}

export default function TalentRoleSelection({
  roles: initialRoles,
  selectedRole,
  setSelectedRole,
}: TalentRoleSelectionProps) {
  const [roles, setRoles] = useState(initialRoles);
  // const [current, setCurrent] = useState(initialRoles[selectedRole].name);

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(
      roles.find((role) => role.name === event.target.value) || undefined,
    );
  };

  // const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedRole(event);
  // };
  useEffect(() => {
    setRoles(initialRoles);
  }, [initialRoles]);

  return (
    <div className='flex items-center space-x-4'>
      <label htmlFor='role-select' className='text-lg font-medium'>
        Select Role:
      </label>
      <select
        id='role-select'
        value={selectedRole ? selectedRole.name : ''}
        onChange={handleRoleChange}
        className='p-2 border border-gray-400 rounded-md'
      >
        <option value=''>Select a role</option>
        {roles.map((role, index) => (
          <option key={index} value={role.name}>
            {role.name}
          </option>
        ))}
      </select>
    </div>
  );
}
