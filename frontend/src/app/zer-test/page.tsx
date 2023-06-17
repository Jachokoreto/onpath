import ProgressBar from '@/components/ProgressBar';
import JobDetailsModal from '@/components/job-details-overlay/JobDetailsModal';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <JobDetailsModal />
    </>
  );
}
