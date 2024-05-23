import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as ExportIcon } from '../../assets/icons/export-icon.svg';
import { Table, TableProps } from 'antd';
import { CourseTableDataType } from '../../utils/types';
import { useState } from 'react';
import Filter from '../../components/filter';

const columns: TableProps<CourseTableDataType>['columns'] = [
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
    title: 'Course Title',
    dataIndex: 'courseTitle',
    key: 'courseTitle',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Level',
    dataIndex: 'level',
    key: 'level',
  },
  {
    title: 'Attendance',
    dataIndex: 'attendance',
    key: 'attendance',
  },
];

const sampleTableData: CourseTableDataType[] = [
  {
    key: '1',
    sn: '1',
    courseCode: 'CSC 445',
    courseTitle: 'Database Mangemnet',
    department: 'Computer Sceince',
    level: '400',
    attendance: '70',
  },
  {
    key: '2',
    sn: '2',
    courseCode: 'CSC 445',
    courseTitle: 'Database Mangemnet',
    department: 'Computer Sceince',
    level: '400',
    attendance: '70',
  },
  {
    key: '3',
    sn: '3',
    courseCode: 'CSC 445',
    courseTitle: 'Database Mangemnet',
    department: 'Computer Sceince',
    level: '400',
    attendance: '70',
  },
];

const options = [
  {
    filter: 'Department',
    options: ['Computer Science', 'Biology', 'ICT', 'Maths'],
  },
  {
    filter: 'Level',
    options: ['100 L', '200 L', '300 L', '400 L'],
  },
];
const Courses = () => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[];
  }>({});

  const handleSelect = (options: { [key: string]: string[] }) => {
    setSelectedOptions(options);
  };

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

        <div className='w-full'>
          <Table columns={columns} dataSource={sampleTableData} />
        </div>
      </div>
    </div>
  );
};

export default Courses;
