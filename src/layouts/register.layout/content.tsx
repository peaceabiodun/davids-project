import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const RegisterContent = () => {
  const registrationSteps = [
    { name: 'Academic Details', url: '' },
    { name: 'Hostel Details', url: 'hostel-details' },
    { name: 'Guardian Details', url: 'guardian-details' },
  ];

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateToUrl = (url: string, index: number) => {
    navigate(url, { replace: true });
  };

  const isLinkActive = (baseRoute?: string) => {
    if (baseRoute === '' && pathname === '/register') {
      return true;
    }
    if (baseRoute) {
      return pathname.includes(baseRoute);
    }
    return false;
  };

  return (
    <div className='w-full h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='bg-[#FBFBFB] p-6 hidden md:flex flex-col justify-center'>
        {registrationSteps.map(({ name, url }, index) => (
          <div
            key={index}
            onClick={() => {
              navigateToUrl(url, index);
            }}
            className='flex items-center justify-center gap-2 my-4 cursor-pointer'
          >
            <div
              className={`w-3 h-3 rounded-full ${
                isLinkActive(url) ? ' bg-black ' : 'bg-[#E6E6E6]'
              }`}
            />
            <p
              className={` p-2  w-[200px] text-sm ${
                isLinkActive(url)
                  ? ' text-black font-semibold bg-white  rounded-lg shadow-md'
                  : 'text-[#808080]'
              }`}
            >
              {name}
            </p>
          </div>
        ))}
      </div>
      <div className='bg-white flex flex-col justify-center p-6 sm:p-12'>
        <Outlet />
      </div>
    </div>
  );
};

export default RegisterContent;
