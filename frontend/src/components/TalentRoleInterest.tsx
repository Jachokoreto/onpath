import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TalentRoleInterestProps {
  interest: boolean;
}

export default function TalentRoleInterest({
  interest,
}: TalentRoleInterestProps) {
  return (
    <>
      {interest ? (
        <FontAwesomeIcon icon={faStar} size='lg' style={{ color: '#FFD800' }} />
      ) : (
        <></>
      )}
    </>
  );
}
