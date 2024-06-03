import { useNavigate } from 'react-router-dom';
import { ReactComponent as HelpIcon } from '../../../assets/icons/help-circle.svg';

const GuardianDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3 className='text-[#8F8F8F] text-lg'>Guardian Details</h3>
      <h3 className='text-3xl font-medium mt-1'>
        Enter in your Guardian details
      </h3>

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
            />
          </div>
        </div>

        <div className='flex justify-between mt-4'>
          <label className='text-sm'>Phone Number</label>
          <HelpIcon />
        </div>
        <input
          type='tel'
          className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
          placeholder='Enter Phone Number'
        />

        <div className='flex justify-between mt-4'>
          <label className='text-sm'>Relationship</label>
          <HelpIcon />
        </div>
        <input
          type='text'
          className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
          placeholder='E.g Mother'
        />

        <button
          onClick={() => navigate('/welcome', { replace: true })}
          className='text-white bg-black p-2 rounded-lg w-full h-[64px] mt-6'
        >
          Save Details
        </button>
      </div>
    </div>
  );
};

export default GuardianDetails;