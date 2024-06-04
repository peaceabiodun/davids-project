import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as ExportIcon } from '../../assets/icons/export-icon.svg';
import { StudentDetailsType } from '../../utils/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Filter from '../../components/filter';
import { supabase } from '../../lib/supabase';
import { toast } from 'react-toastify';
import { STORAGE_KEYS } from '../../utils/constants';
import useStudentDetailsContext from '../../context/student-details-context';

const options = [
  {
    filter: 'Gender',
    options: ['All', 'Male', 'Female'],
  },
  {
    filter: 'Department',
    options: ['Computer Science', 'Biology', 'ICT', 'Maths'],
  },
];
const Students = () => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { setSelectedRow } = useStudentDetailsContext();
  const [studentDetails, setStudentDetails] = useState<StudentDetailsType[]>(
    []
  );
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[];
  }>({});

  const handleSelect = (options: { [key: string]: string[] }) => {
    setSelectedOptions(options);
  };
  const navigate = useNavigate();
  const firstName = localStorage.getItem(STORAGE_KEYS.FIRST_NAME);
  const lastName = localStorage.getItem(STORAGE_KEYS.LAST_NAME);

  const getStudentDetails = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('registered').select();
      setStudentDetails(data ?? []);
    } catch {
      toast.error('Sorry an error occured !', {
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudentDetails();
  }, []);

  const filteredStudents = searchValue
    ? studentDetails.filter(
        (item) =>
          item.matric_no.includes(searchValue) ||
          item.department.includes(searchValue) ||
          item.hostel_wing.includes(searchValue)
      )
    : studentDetails;

  return (
    <div className='bg-[#FAFAFA] p-4 w-full h-full min-h-screen '>
      <div className='m-4 bg-white rounded-md h-full p-3'>
        <div className='flex justify-between pb-3'>
          <div className='bg-[#FAFAFA] flex gap-2 p-3 rounded-md w-[280px]'>
            <SearchIcon />
            <input
              type='text'
              placeholder='Search Students'
              className='bg-[#FAFAFA] outline-none text-sm font-light w-full'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          <div className='flex gap-2'>
            <Filter options={options} onSelect={handleSelect} />

            <div className='border rounded-lg p-2 flex items-center gap-2 justify-between text-[#808084] font-light text-sm w-[130px]'>
              <p>Export Data</p>
              <ExportIcon />
            </div>
          </div>
        </div>

        <div className='border-y p-3 w-full flex justify-between'>
          <div className='flex gap-2'>
            {Object.keys(selectedOptions).flatMap((filter) =>
              selectedOptions[filter].map((option) => (
                <div
                  key={`${filter}-${option}`}
                  className='bg-[#FAFAFA] p-2 rounded-xl text-xs cursor-pointer'
                >
                  {option}
                </div>
              ))
            )}
          </div>
          <div>1 - 10</div>
        </div>

        <div className='w-full mt-4'>
          {loading ? (
            <h1 className='text-center mt-12 text-lg'>Loading...</h1>
          ) : filteredStudents.length === 0 ? (
            <h1 className='text-center mt-12 text-lg'>No Student Available</h1>
          ) : (
            <table className='w-full'>
              <tr className='border-b bg-[#FAFAFA] text-[#171718] '>
                <th className='py-3 text-sm'>SN</th>
                <th className='py-3 text-sm'>Reg No</th>
                <th className='py-3 text-sm'>Full Name</th>
                <th className='py-3 text-sm'>Matric Numbers</th>
                <th className='py-3 text-sm'>Department</th>
                <th className='py-3 text-sm'>Gender</th>
                <th className='py-3 text-sm'>Guardian</th>
                <th className='py-3 text-sm'>Room no</th>
              </tr>

              {filteredStudents.map((item, index) => (
                <tr
                  onClick={() => {
                    setSelectedRow(item);
                    navigate('/dashboard/students-details', { replace: true });
                  }}
                  key={item.id}
                  className='text-center mt-3 text-sm text-[#808084] border-b cursor-pointers'
                >
                  <td className='py-3 '>{index}</td>
                  <td>{item.matric_no}</td>
                  <td className='capitalize'>
                    {firstName} {lastName}
                  </td>
                  <td className='capitalize '>{item.matric_no}</td>
                  <td className='capitalize '>{item.department}</td>
                  <td className=' '>Nil</td>
                  <td className='capitalize '>
                    {item.guardian.first_name} {item.guardian.last_name}
                  </td>
                  <td className=' '>{item.room_no}</td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Students;
