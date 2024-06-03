import { useNavigate } from 'react-router-dom';
import { ReactComponent as HelpIcon } from '../../../assets/icons/help-circle.svg';
import useRegistrationContext from '../../../context/registration-context';

const AcademicDetails = () => {
  const navigate = useNavigate();
  const { registrationFormData, setRegistrationFormData } =
    useRegistrationContext();
  const disable =
    !registrationFormData?.matric_no ||
    !registrationFormData?.department ||
    !registrationFormData?.course ||
    !registrationFormData?.level;
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
          value={registrationFormData?.matric_no}
          onChange={(e) =>
            setRegistrationFormData({
              ...registrationFormData,
              matric_no: e.target.value,
            })
          }
        />

        <div className='flex justify-between mt-4'>
          <label className='text-sm'>Department</label>
          <HelpIcon />
        </div>
        <input
          type='text'
          className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
          placeholder='Enter Department'
          value={registrationFormData?.department}
          onChange={(e) =>
            setRegistrationFormData({
              ...registrationFormData,
              department: e.target.value,
            })
          }
        />

        <div className='flex justify-between mt-4'>
          <label className='text-sm'>Course of Study</label>
          <HelpIcon />
        </div>
        <input
          type='text'
          className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
          placeholder='Enter Course of Study'
          value={registrationFormData?.course}
          onChange={(e) =>
            setRegistrationFormData({
              ...registrationFormData,
              course: e.target.value,
            })
          }
        />

        <div className='flex justify-between mt-4'>
          <label className='text-sm'>Level</label>
          <HelpIcon />
        </div>
        <input
          type='text'
          className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
          placeholder='Enter Level'
          value={registrationFormData?.level}
          onChange={(e) =>
            setRegistrationFormData({
              ...registrationFormData,
              level: e.target.value,
            })
          }
        />

        <button
          disabled={disable}
          className={`text-white bg-black p-2 rounded-lg w-full h-[64px] mt-6 ${
            disable ? 'cursor-not-allowed' : ''
          }`}
          onClick={() => navigate('hostel-details')}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AcademicDetails;
