import { ReactComponent as BellIcon } from '../../assets/icons/bell-icon.svg';

const Header = () => {
  return (
    <div className='w-full flex justify-between h-[70px] px-3  '>
      <div className='flex items-center ml-3 text-sm'>Good Morning David 🌤</div>

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
