import { useNavigate } from 'react-router-dom';
import { ReactComponent as HelpIcon } from '../../../assets/icons/help-circle.svg';
import useRegistrationContext from '../../../context/registration-context';

const HostelDetails = () => {
  const navigate = useNavigate();
  const { registrationFormData, setRegistrationFormData } =
    useRegistrationContext();

  const disable =
    !registrationFormData?.hostel_wing || !registrationFormData?.room_no;
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
          value={registrationFormData?.hostel_wing}
          onChange={(e) =>
            setRegistrationFormData({
              ...registrationFormData,
              hostel_wing: e.target.value,
            })
          }
        />

        <div className='flex justify-between mt-4'>
          <label className='text-sm'>Room No</label>
          <HelpIcon />
        </div>
        <input
          type='text'
          className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
          placeholder='Enter Room No'
          value={registrationFormData?.room_no}
          onChange={(e) =>
            setRegistrationFormData({
              ...registrationFormData,
              room_no: e.target.value,
            })
          }
        />

        <button
          className={`text-white bg-black p-2 rounded-lg w-full h-[64px] mt-6 ${
            disable ? 'cursor-not-allowed' : ''
          }`}
          disabled={disable}
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
