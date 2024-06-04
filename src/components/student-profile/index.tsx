import Img1 from '../../assets/images/img1.png';
import Avatar from '../../assets/images/avatar.png';
import useStudentDetailsContext from '../../context/student-details-context';
import { STORAGE_KEYS } from '../../utils/constants';

const StudentProfile = () => {
  const { selectedRow, setSelectedRow } = useStudentDetailsContext();
  const firstName = localStorage.getItem(STORAGE_KEYS.FIRST_NAME);
  const lastName = localStorage.getItem(STORAGE_KEYS.LAST_NAME);

  return (
    <div className='bg-white rounded-md flex '>
      <div className='p-3'>
        <img
          src={Img1}
          alt='student-img'
          className='w-[214px] h-[252px] object-cover rounded-xl'
        />
      </div>
      <div className='p-3 border-l w-full'>
        <div className='border-b pb-3'>
          <h3 className='text-lg capitalize'>
            {firstName} {lastName}
          </h3>
          <p className='text-[#767676] text-xs mt-[2px]'>
            {selectedRow.matric_no}
          </p>
        </div>

        <div className='grid grid-cols-5 gap-4 p-3 text-sm'>
          <div>
            <div>
              <p className='text-[#737A91] font-light'>Gender</p>
              <p>Nil</p>
            </div>
            <div className=' my-2'>
              <p className='text-[#737A91] font-light'>Total attendance</p>
              <p>690</p>
            </div>
            <div>
              <p className='text-[#737A91] font-light'>Class Missed</p>
              <p>0</p>
            </div>
          </div>

          <div>
            <div>
              <p className='text-[#737A91] font-light'>Reg Number</p>
              <p>{selectedRow.matric_no}</p>
            </div>
            <div className=' my-2'>
              <p className='text-[#737A91] font-light'>Courses Offered</p>
              <p>14 (Current Level)</p>
            </div>
            <div>
              <p className='text-[#737A91] font-light'>Total Dept Courses</p>
              <p>56</p>
            </div>
          </div>

          <div>
            <div>
              <p className='text-[#737A91] font-light'>Room No</p>
              <p>{selectedRow.room_no}</p>
            </div>
            <div className='my-2'>
              <p className='text-[#737A91] font-light'>Classes Attended</p>
              <p>1,154</p>
            </div>
            <div>
              <p className='text-[#737A91] font-light'>Total Clients</p>
              <p>45</p>
            </div>
          </div>

          <div>
            <div>
              <p className='text-[#737A91] font-light'>Department</p>
              <p>{selectedRow.department}</p>
            </div>
            <div className='my-2'>
              <p className='text-[#737A91] font-light'>Courses Cleared</p>
              <p>40</p>
            </div>
            <div>
              <p className='text-[#737A91] font-light'>Level</p>
              <p>{selectedRow.level}</p>
            </div>
          </div>

          <div>
            <div className='mb-2'>
              <p className='text-[#737A91] font-light'>Courses Failed</p>
              <p>None</p>
            </div>
            <div>
              <p className='text-[#737A91] font-light'>Courses Left</p>
              <p>16</p>
            </div>
          </div>
        </div>
        <div className='flex gap-3 border-t p-3'>
          <div>
            <img src={Avatar} alt='guardian' className='w-9 h-9 rounded-full' />
          </div>
          <div>
            <p className='text-[#8B8B8B] text-[10px] mb-1'>Guardian</p>
            <p className='text-xs capitalize'>
              {selectedRow.guardian.first_name} {selectedRow.guardian.last_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
