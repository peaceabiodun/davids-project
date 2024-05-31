import { useNavigate } from 'react-router-dom';
import { ReactComponent as HelpIcon } from '../../../assets/icons/help-circle.svg';

const HostelDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3 className='text-[#8F8F8F] text-lg'>Hostel Details</h3>
      <h3 className='text-3xl font-medium mt-1'>Fill in your Hostel details</h3>

      <div className='max-w-[444px] my-6'>
        <div className='flex justify-between'>
          <label className='text-sm'>Hostel Wing</label>
          <HelpIcon />
        </div>
        <input
          type='text'
          className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
          placeholder='Enter Hostel Wing'
        />

        <div className='flex justify-between mt-4'>
          <label className='text-sm'>Room No</label>
          <HelpIcon />
        </div>
        <input
          type='text'
          className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
          placeholder='Enter Room No'
        />

        <button
          className='text-white bg-black p-2 rounded-lg w-full h-[64px] mt-6'
          onClick={() =>
            navigate('/register/guardian-details', { replace: true })
          }
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default HostelDetails;
