import { Outlet } from 'react-router-dom';

const RegisterLayout = () => {
  return (
    <div className='w-full h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='bg-[#FBFBFB] p-6 hidden md:flex flex-col justify-center'></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RegisterLayout;
