import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter-icon.svg';
import { ReactComponent as ExportIcon } from '../../assets/icons/export-icon.svg';
import { Table, ConfigProvider } from 'antd';
import type { TableProps } from 'antd';
import { TreeSelect } from 'antd';
import { StudentTableDataType } from '../../utils/types';
import { useState } from 'react';

const columns: TableProps<StudentTableDataType>['columns'] = [
  {
    title: 'SN',
    dataIndex: 'sn',
    key: 'sn',
  },
  {
    title: 'Reg No',
    dataIndex: 'regNo',
    key: 'regNo',
  },
  {
    title: 'Full name',
    dataIndex: 'fullname',
    key: 'fullname',
  },
  {
    title: 'Matric Numbers',
    dataIndex: 'matric',
    key: 'matric',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Guardian',
    dataIndex: 'guardian',
    key: 'guardian',
  },
  {
    title: 'Room no',
    dataIndex: 'room',
    key: 'room',
  },
];
const sampleTableData: StudentTableDataType[] = [
  {
    key: '1',
    sn: '1',
    regNo: '67885888558',
    fullname: 'Josh Micheal',
    matric: 'ACC678847',
    department: 'Computer Science',
    gender: 'Male',
    guardian: 'Ola Aina',
    room: '6755',
  },
  {
    key: '2',
    sn: '2',
    regNo: '67885888558',
    fullname: 'Josh Micheal',
    matric: 'ACC678847',
    department: 'Computer Science',
    gender: 'Male',
    guardian: 'Ola Aina',
    room: '6755',
  },
  {
    key: '3',
    sn: '3',
    regNo: '67885888558',
    fullname: 'Josh Micheal',
    matric: 'ACC678847',
    department: 'Computer Science',
    gender: 'Male',
    guardian: 'Ola Aina',
    room: '6755',
  },
];

const { SHOW_PARENT } = TreeSelect;
const treeData = [
  {
    title: 'Gender',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'All',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: 'Male',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Female',
        value: '0-1-1',
        key: '0-1-1',
      },
    ],
  },
  {
    title: 'Department',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Computer Science',
        value: '1-1-1',
        key: '1-1-1',
      },
      {
        title: 'Mathematics',
        value: '1-2-1',
        key: '1-2-1',
      },
      {
        title: 'Biology',
        value: '1-1-2',
        key: '1-1-2',
      },
    ],
  },
];

const Students = () => {
  const [value, setValue] = useState(['0-0-0']);
  const onChange = (newValue: string[]) => {
    setValue(newValue);
  };

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Filter',
    style: {
      width: '100px',
      height: '48px',
    },
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 14,
          colorText: '#808084',
        },
      }}
    >
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
              {/* <div className='border rounded-lg p-2 flex items-center gap-2 justify-between text-[#808084] font-light text-sm w-[100px] '>
              <p>Filter</p>
              <FilterIcon />
            </div> */}
              <div>
                <TreeSelect
                  {...tProps}
                  className='text-sm w-[100px] text-[#808084] font-light'
                  dropdownStyle={{ width: '200px' }}
                />
              </div>
              <div className='border rounded-lg p-2 flex items-center gap-2 justify-between text-[#808084] font-light text-sm w-[130px]'>
                <p>Export Data</p>
                <ExportIcon />
              </div>
            </div>
          </div>

          <div className='border-y p-3 w-full flex justify-between'>
            <div className='bg-[#FAFAFA] p-2 rounded-xl text-xs cursor-pointer'>
              All Students
            </div>
            <div>1 - 10</div>
          </div>

          <div className='w-full'>
            <Table columns={columns} dataSource={sampleTableData} />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Students;
