import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-Icon.svg';

const Header = () => {
  return (
    <div className='w-full p-3'>
      <div className='flex gap-2 items-center'>
        <div className='bg-[#F9F9F9] w-10 h-10 rounded-md' />
        <p className='text-sm font-medium'>School portal</p>
        <ArrowIcon />
      </div>
    </div>
  );
};

export default Header;
