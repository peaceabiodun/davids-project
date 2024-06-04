import { useNavigate } from 'react-router-dom';
import { ReactComponent as HelpIcon } from '../../../assets/icons/help-circle.svg';
import useRegistrationContext from '../../../context/registration-context';
import { useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { STORAGE_KEYS } from '../../../utils/constants';
import { toast } from 'react-toastify';

const GuardianDetails = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { registrationFormData, setRegistrationFormData } =
    useRegistrationContext();
  const userId = localStorage.getItem(STORAGE_KEYS.USER_ID);
  const register = async () => {
    const payload = {
      user_id: userId,
      matric_no: registrationFormData.matric_no,
      department: registrationFormData.department,
      course: registrationFormData.course,
      level: registrationFormData.level,
      hostel_wing: registrationFormData.hostel_wing,
      room_no: registrationFormData.room_no,
      guardian: {
        first_name: registrationFormData.guardian.first_name,
        last_name: registrationFormData.guardian.last_name,
        phone_no: registrationFormData.guardian.phone_no,
        relationship: registrationFormData.guardian.relationship,
      },
    };
    setLoading(true);
    try {
      const { data, error } = await supabase.from('registered').insert(payload);
      if (error !== null) {
        toast.error('Sorry an error occured !', {
          position: 'top-right',
        });
      } else {
        setRegistrationFormData({
          matric_no: '',
          department: '',
          course: '',
          level: '',
          hostel_wing: '',
          room_no: '',
          guardian: {
            first_name: '',
            last_name: '',
            phone_no: '',
            relationship: '',
          },
        });
        navigate('/registered', { replace: true });
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const disable =
    !registrationFormData?.guardian.first_name ||
    !registrationFormData?.guardian.last_name ||
    !registrationFormData?.guardian.phone_no ||
    !registrationFormData?.guardian.relationship;

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
              value={registrationFormData?.guardian.first_name}
              onChange={(e) =>
                setRegistrationFormData({
                  ...registrationFormData,
                  guardian: {
                    ...registrationFormData.guardian,
                    first_name: e.target.value,
                  },
                })
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
              placeholder='Enter last Name'
              value={registrationFormData?.guardian.last_name}
              onChange={(e) =>
                setRegistrationFormData({
                  ...registrationFormData,
                  guardian: {
                    ...registrationFormData.guardian,
                    last_name: e.target.value,
                  },
                })
              }
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
          value={registrationFormData?.guardian.phone_no}
          onChange={(e) =>
            setRegistrationFormData({
              ...registrationFormData,
              guardian: {
                ...registrationFormData.guardian,
                phone_no: e.target.value,
              },
            })
          }
        />

        <div className='flex justify-between mt-4'>
          <label className='text-sm'>Relationship</label>
          <HelpIcon />
        </div>
        <input
          type='text'
          className='bg-[#FAFAFA] outline-none p-3 placeholder:text-[#B3B3B3] text-sm h-[50px] w-full rounded-xl mt-2'
          placeholder='E.g Mother'
          value={registrationFormData?.guardian.relationship}
          onChange={(e) =>
            setRegistrationFormData({
              ...registrationFormData,
              guardian: {
                ...registrationFormData.guardian,
                relationship: e.target.value,
              },
            })
          }
        />

        <button
          onClick={register}
          disabled={disable}
          className={`text-white bg-black p-2 rounded-lg w-full h-[64px] mt-6 ${
            disable ? 'cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Loading...' : ' Save Details'}
        </button>
      </div>
    </div>
  );
};

export default GuardianDetails;
