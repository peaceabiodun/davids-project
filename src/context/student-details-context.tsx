import { ReactNode, createContext, useContext, useState } from 'react';
import { StudentDetailsType } from '../utils/types';

type StudentDetailsContextType = {
  selectedRow: StudentDetailsType;
  setSelectedRow: (item: StudentDetailsType) => void;
};

export const StudentDetailsContext = createContext(
  {} as StudentDetailsContextType
);

export const StudentDetailsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedRow, setSelectedRow] = useState({} as StudentDetailsType);

  return (
    <StudentDetailsContext.Provider value={{ selectedRow, setSelectedRow }}>
      {children}
    </StudentDetailsContext.Provider>
  );
};

const useStudentDetailsContext = () => {
  return useContext(StudentDetailsContext);
};

export default useStudentDetailsContext;
