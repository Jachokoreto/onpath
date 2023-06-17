import { Button, Checkbox, Label } from 'flowbite-react';
import { Dispatch, SetStateAction } from 'react';

interface TalentRoleInterestProps {
  interest: boolean;
  setInterest: Dispatch<SetStateAction<boolean>>;
}
export default function TalentRoleInterest({
  interest,
  setInterest,
}: TalentRoleInterestProps) {
  const handleInterestChange = () => {
    setInterest(!interest);
  };
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        id='accept'
        checked={interest}
        onChange={handleInterestChange}
      />
      <Label htmlFor='accept' onClick={() => setInterest(!interest)}>
        Interested in this role
      </Label>
    </div>
  );
}
