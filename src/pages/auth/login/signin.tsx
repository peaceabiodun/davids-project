import { useState } from 'react';
import { ReactComponent as HelpIcon } from '../../../assets/icons/help-circle.svg';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/supabase';
import { STORAGE_KEYS } from '../../../utils/constants';
import { toast } from 'react-toastify';

type SigninFormType = {
  email: string;
  password: string;
};
const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<SigninFormType>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const disabled = !formData.email || !formData.password;

  const login = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) {
        toast.error('Sorry an error occured !', {
          position: 'top-right',
        });
      } else {
        localStorage.setItem(
          STORAGE_KEYS.AUTH_TOKEN,
          data.session?.access_token ?? ''
        );
        localStorage.setItem(STORAGE_KEYS.EMAIL, data.user?.email ?? '');
        localStorage.setItem(STORAGE_KEYS.USER_ID, data.user?.id ?? '');
        localStorage.setItem(
          STORAGE_KEYS.FIRST_NAME,
          data.user?.user_metadata.first_name ?? ''
        );
        localStorage.setItem(
          STORAGE_KEYS.LAST_NAME,
          data.user?.user_metadata.last_name ?? ''
        );
        setFormData({ email: '', password: '' });
        navigate('/welcome');
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='bg-[#FBFBFB] text-[#EEEEEE] p-6 hidden md:flex flex-col justify-center'>
        <h1 className='text-[80px] '>School</h1>
        <h1 className='font-extrabold text-[120px] ml-12'>Portal</h1>
      </div>
      <div className='bg-white flex flex-col justify-center p-6 sm:p-12'>
        <h3 className='text-[#8F8F8F] text-lg'>Sign in</h3>
        <h3 className='text-2xl font-medium mt-1'>Welcome Back!</h3>

        <div className='max-w-[444px] my-6'>
          <div className='flex justify-between'>
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
            <label className='text-sm'>Password</label>
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
          {disabled && (
            <div className='text-sm mt-2'>
              Please input correct email and password
            </div>
          )}

          <button
            disabled={disabled}
            type='submit'
            className='text-white bg-black p-2 rounded-lg w-full h-[64px] mt-6'
            onClick={login}
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>

          <div className='flex gap-1 text-xs mt-1'>
            <p>If you don&apos;t have a registered account please</p>
            <Link to={'/signup'} className='text-green-500'>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
