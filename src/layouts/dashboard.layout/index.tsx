import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';

const DashboardLayout = () => {
  const breadCrumbs = [
    {
      name: 'Overview',
      path: '',
    },
    {
      name: 'Create cokitchen',
      path: '',
    },
  ];
  return (
    <div className='flex '>
      <Sidebar />
      <div className='flex flex-col grow'>
        <Header breadcrumbs={breadCrumbs} />
        <div className='w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
