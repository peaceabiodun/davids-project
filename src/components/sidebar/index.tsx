import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-Icon.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home-icon.svg';
import { ReactComponent as StudentIcon } from '../../assets/icons/student-icon.svg';
import { ReactComponent as CourseIcon } from '../../assets/icons/course-icon.svg';
import { ReactComponent as HostelIcon } from '../../assets/icons/hostel-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user-icon.svg';
import Avatar from '../../assets/images/avatar.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const sidebarMenu = [
    {
      name: 'Home',
      icon: <HomeIcon />,
      route: '',
    },
    {
      name: 'Students',
      icon: <StudentIcon />,
      route: 'students',
    },
    {
      name: 'Courses',
      icon: <CourseIcon />,
      route: 'courses',
    },
    {
      name: 'Hostels',
      icon: <HostelIcon />,
      route: '',
    },
    {
      name: 'Guardians',
      icon: <UserIcon />,
      route: '',
    },
    {
      name: 'Lecturers',
      icon: <StudentIcon />,
      route: '',
    },
  ];

  return (
    <div className='w-[280px] my-3'>
      <div className='flex justify-between border-b px-3 pb-3 h-[70px]'>
        <div className='flex gap-2 items-center'>
          <div className='bg-[#F9F9F9] w-10 h-10 rounded-md' />
          <p className='text-sm font-medium'>School portal</p>
        </div>
        <div className='bg-[#FFF5F5] w-10 h-10 rounded-md flex items-center justify-center'>
          <ArrowIcon />
        </div>
      </div>

      <p className='p-3 border-b text-[#949494] text-sm'>ADMINISTRATOR</p>

      <div className='p-3 border-b flex gap-3'>
        <img src={Avatar} alt='avatar' />
        <div className='text-sm'>
          <p>David Muritala</p>
          <p className='text-[#999999] mt-1 font-light'>
            david.muri@schoolportal.com
          </p>
        </div>
      </div>

      <div className='space-y-3 mt-4 p-3'>
        {sidebarMenu.map((item, index) => (
          <Link
            key={index}
            to={item.route}
            className='flex gap-3 p-3 text-sm text-[#808084] hover:font-semibold hover:text-black hover:bg-[#F6F6F6] rounded-lg cursor-pointer'
          >
            <div>{item.icon}</div>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
