import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';

const DashboardLayout = () => {
  return (
    <div className='flex relative w-full '>
      <Sidebar />
      <div className='flex flex-col grow'>
        <Header />
        <div className='w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
