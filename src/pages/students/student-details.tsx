import StudentProfile from '../../components/student-profile';
import { ReactComponent as CourseIcon } from '../../assets/icons/course-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter-icon.svg';
import { ReactComponent as ExportIcon } from '../../assets/icons/export-icon.svg';
import { Table, TableProps } from 'antd';
import { YearTableDataType } from '../../utils/types';

const StudentDetails = () => {
  const tabs = ['Courses', 'Attendance', 'Results'];
  const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];

  const columns: TableProps<YearTableDataType>['columns'] = [
    {
      title: 'SN',
      dataIndex: 'sn',
      key: 'sn',
    },
    {
      title: 'Course Code',
      dataIndex: 'courseCode',
      key: 'courseCode',
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance',
      key: 'attendance',
    },
    {
      title: 'Course Title',
      dataIndex: 'courseTitle',
      key: 'courseTitle',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const sampleTableData: YearTableDataType[] = [
    {
      key: '1',
      sn: '1',
      courseCode: 'MTH 115',
      attendance: '135/135',
      courseTitle: 'Computer Science',
      status: 'passed',
    },
    {
      key: '2',
      sn: '2',
      courseCode: 'MTH 115',
      attendance: '135/135',
      courseTitle: 'Computer Science',
      status: 'passed',
    },
    {
      key: '3',
      sn: '3',
      courseCode: 'MTH 115',
      attendance: '135/135',
      courseTitle: 'Computer Science',
      status: 'passed',
    },
  ];
  return (
    <div className='bg-[#FAFAFA] p-4 w-full h-full min-h-screen '>
      <StudentProfile />
      <div className='flex gap-3 p-3 text-sm text-[#808080] bg-white border-y'>
        {tabs.map((itm, index) => (
          <div
            key={index}
            className='cursor-pointer hover:bg-black hover:text-white p-2 rounded-md'
          >
            {itm}
          </div>
        ))}
      </div>
      <div className='bg-white flex '>
        <div className='w-[200px] p-3'>
          {years.map((itm, index) => (
            <div
              key={index}
              className='flex gap-2 items-center p-3 hover:bg-[#F6F6F6] rounded-md text-gray-400 text-sm hover:text-black cursor-pointer'
            >
              <CourseIcon />
              <p>{itm}</p>
            </div>
          ))}
        </div>
        <div className='border-l p-3 w-full '>
          <div className='gap-4 flex justify-between border-b pb-3'>
            <div className='bg-[#FAFAFA] flex gap-2 p-3 rounded-md w-[280px]'>
              <SearchIcon />
              <input
                type='text'
                placeholder='Search Courses'
                className='bg-[#FAFAFA] outline-none text-sm font-light w-full'
              />
            </div>

            <div className='flex gap-2'>
              <div className='border rounded-lg p-2 flex items-center gap-2 justify-between text-[#808084] font-light text-sm w-[100px] '>
                <p>Filter</p>
                <FilterIcon />
              </div>

              <div className='border rounded-lg p-2 flex items-center gap-2 justify-between text-[#808084] font-light text-sm w-[130px]'>
                <p>Export Data</p>
                <ExportIcon />
              </div>
            </div>
          </div>

          <div className='w-full'>
            <Table columns={columns} dataSource={sampleTableData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
