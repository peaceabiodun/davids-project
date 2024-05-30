import { useState } from 'react';
import { ReactComponent as HelpIcon } from '../../../assets/icons/help-circle.svg';
import { Link, useNavigate } from 'react-router-dom';

type SignupFormType = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};
const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<SignupFormType>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const createUser = () => {
    setLoading(true);
  };
  return (
    <div className='w-full h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='bg-[#FBFBFB] text-[#EEEEEE] p-6 hidden md:flex flex-col justify-center'>
        <h1 className='text-[80px] '>School</h1>
        <h1 className='font-extrabold text-[120px] ml-12'>Portal</h1>
      </div>
      <div className='bg-white flex flex-col justify-center p-6 sm:p-12'>
        <h3 className='text-[#8F8F8F] text-lg'>Sign Up</h3>
        <h3 className='text-2xl font-medium mt-1'>Create Account</h3>

        <div className='  max-w-[444px] my-6'>
          <div className='flex gap-4 w-full'>
            <div className='w-full'>
              <div className='flex justify-between'>
                <label className='text-sm'>First Name</label>
                <HelpIcon />
              </div>
              <input
                type='text'
                className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
                placeholder='Enter First Name'
                value={formData.first_name}
                onChange={(e) =>
                  setFormData({ ...formData, first_name: e.target.value })
                }
              />
            </div>

            <div className='w-full'>
              <div className='flex justify-between'>
                <label className='text-sm'>Last Name</label>
                <HelpIcon />
              </div>
              <input
                type='text'
                className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
                placeholder='Enter First Name'
                value={formData.last_name}
                onChange={(e) =>
                  setFormData({ ...formData, last_name: e.target.value })
                }
              />
            </div>
          </div>
          <div className='flex justify-between mt-4'>
            <label className='text-sm'>Email Address</label>
            <HelpIcon />
          </div>
          <input
            type='email'
            className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
            placeholder='Enter Email Address'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <div className='flex justify-between mt-4'>
            <label className='text-sm'>New Password</label>
            <HelpIcon />
          </div>
          <input
            type='password'
            className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
            placeholder='Enter Password'
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button
            type='submit'
            onClick={createUser}
            className='text-white bg-black p-2 rounded-lg w-full h-[64px] mt-6'
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>

          <div className='flex gap-1 text-xs mt-1'>
            <p>If you already have a registered account please</p>
            <Link to={'/'} className='text-green-500'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
