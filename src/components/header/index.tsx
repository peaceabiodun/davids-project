import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { BreadcrumbType } from '../../utils/types';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as BellIcon } from '../../assets/icons/bell-icon.svg';

type HeaderProps = {
  breadcrumbs?: BreadcrumbType[];
};

const Header = ({ breadcrumbs }: HeaderProps) => {
  //   const [crumbs, setCrumbs] = useState<BreadcrumbType[]>([]);
  //   const [lastItem, setLastItem] = useState<BreadcrumbType>();
  //   const [key, setKey] = useState(0);

  //   useEffect(() => {
  //     setCrumbs(
  //       breadcrumbs?.filter((c, i) => i !== breadcrumbs?.length - 1) ?? []
  //     );
  //     setLastItem(breadcrumbs?.pop());
  //     setKey((p) => p + 1);
  //   }, [breadcrumbs]);
  return (
    <div className='w-full flex justify-between h-[70px] px-3 my-3 '>
      <div className='flex items-center ml-3 text-sm'>Good Morning David</div>
      {/* <div className='breadcrumbs' key={key}>
          {crumbs.map(({ name, path }) => (
            <Link key={path} className='crumb crumb-link' to={path}>
              {name}
            </Link>
          ))}
          <span className='crumb'>{lastItem?.name}</span>
        </div>
        <Link to='..' replace className=' cursor-pointer  '>
          <div className='w-full flex justify-center items-center h-full'>
            <ArrowIcon />
          </div>
        </Link> */}

      <div className='flex gap-4 items-center'>
        <button className='bg-[#F2F2F2] rounded-lg p-2 h-[44px] w-[108px] text-sm '>
          Create New
        </button>
        <div className='border-l py-3 px-3 flex items-center'>
          <BellIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
