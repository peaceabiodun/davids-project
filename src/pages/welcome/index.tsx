import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='bg-white flex flex-col justify-start p-6 sm:p-12 md:p-[70px]'>
        <h3 className='text-[#8F8F8F] text-sm '>Sign Up</h3>
        <h2 className='text-3xl mt-2'>Welcome to</h2>
        <h1 className='text-4xl font-semibold'>School Portal!</h1>
        <button
          onClick={() => navigate('/dashboard')}
          className='text-white bg-black p-2 rounded-md mt-5 w-[200px] text-sm'
        >
          Go to Dashboard
        </button>
      </div>
      <div className='bg-[#FBFBFB] hidden md:flex'></div>
    </div>
  );
};

export default Welcome;
