import { useNavigate } from 'react-router-dom';
import { ReactComponent as HelpIcon } from '../../../assets/icons/help-circle.svg';

const AcademicDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3 className='text-[#8F8F8F] text-lg'>Academic Details</h3>
      <h3 className='text-3xl font-medium mt-1'>
        Fill in your Academic details
      </h3>

      <div className='max-w-[444px] my-6'>
        <div className='flex justify-between'>
          <label className='text-sm'>Matric Number</label>
          <HelpIcon />
        </div>
        <input
          type='text'
          className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
          placeholder='Enter Matric Number'
        />

        <div className='flex justify-between mt-4'>
          <label className='text-sm'>Department</label>
          <HelpIcon />
        </div>
        <input
          type='text'
          className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
          placeholder='Enter Department'
        />

        <div className='flex justify-between mt-4'>
          <label className='text-sm'>Course of Study</label>
          <HelpIcon />
        </div>
        <input
          type='text'
          className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
          placeholder='Enter Course of Study'
        />

        <div className='flex justify-between mt-4'>
          <label className='text-sm'>Level</label>
          <HelpIcon />
        </div>
        <input
          type='text'
          className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
          placeholder='Enter Level'
        />

        <button
          className='text-white bg-black p-2 rounded-lg w-full h-[64px] mt-6'
          onClick={() => navigate('hostel-details')}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AcademicDetails;
