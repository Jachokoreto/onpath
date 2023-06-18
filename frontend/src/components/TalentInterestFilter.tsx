import { Checkbox, Label } from 'flowbite-react';
import { Dispatch, SetStateAction } from 'react';

interface TalentInterestFilterProps {
  InterestFilter: boolean;
  setInterestFilter: Dispatch<SetStateAction<boolean>>;
}
export default function TalentInterestFilterFilter({
  InterestFilter,
  setInterestFilter,
}: TalentInterestFilterProps) {
  const handleInterestFilterChange = () => {
    setInterestFilter(!InterestFilter);
  };
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        id='accept'
        checked={InterestFilter}
        onChange={handleInterestFilterChange}
      />
      <Label
        htmlFor='accept'
        onClick={() => setInterestFilter(!InterestFilter)}
      >
        Interested in this role
      </Label>
    </div>
  );
}
