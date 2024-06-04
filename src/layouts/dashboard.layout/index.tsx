import { StudentDetailsProvider } from '../../context/student-details-context';
import DashboardContent from './content';

const DashboardLayout = () => {
  return (
    <StudentDetailsProvider>
      <DashboardContent />
    </StudentDetailsProvider>
  );
};

export default DashboardLayout;
