import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter-icon.svg';
import { ReactComponent as ExportIcon } from '../../assets/icons/export-icon.svg';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const sampleTableData = [
  {
    sn: '1',
    regNo: '67885888558',
    name: 'Josh Micheal',
    matric: 'ACC678847',
    department: 'Computer Science',
    gender: 'Male',
    guardian: 'Ola Aina',
    room: '6755',
  },
  {
    sn: '2',
    regNo: '67885888558',
    name: 'Josh Micheal',
    matric: 'ACC678847',
    department: 'Computer Science',
    gender: 'Male',
    guardian: 'Ola Aina',
    room: '6755',
  },
  {
    sn: '3',
    regNo: '67885888558',
    name: 'Josh Micheal',
    matric: 'ACC678847',
    department: 'Computer Science',
    gender: 'Male',
    guardian: 'Ola Aina',
    room: '6755',
  },
];
const Students = () => {
  return (
    <div className='bg-[#FAFAFA] p-4 w-full '>
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
            <div className='border rounded-lg p-2 flex items-center gap-2 justify-between text-[#808084] font-light text-sm w-[100px]'>
              <p>Filter</p>
              <FilterIcon />
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
          {/* <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className='text-sm font-semibold'>
                  <TableCell>SN</TableCell>
                  <TableCell align='right'>Reg No</TableCell>
                  <TableCell align='right'>Full Name</TableCell>
                  <TableCell align='right'>Matric number</TableCell>
                  <TableCell align='right'>Department</TableCell>
                  <TableCell align='right'>Gender</TableCell>
                  <TableCell align='right'>Guardian</TableCell>
                  <TableCell align='right'>Room No</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {sampleTableData.map((item, index) => (
                  <TableRow key={index}>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
        </div>
      </div>
    </div>
  );
};

export default Students;
