import { createContext } from 'vm';
import { RegistrationFormType } from '../utils/types';
import { ReactNode, useContext, useState } from 'react';

type RegistrationContextType = {
  registrationFormData: RegistrationFormType;
  setRegistrationFormData: (item: RegistrationFormType[]) => void;
};

export const RegistrationContext = createContext({} as RegistrationContextType);

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
  const [registrationFormData, setRegistrationFormData] =
    useState<RegistrationFormType>({
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

  return (
    <RegistrationContext.Provider
      value={{ registrationFormData, setRegistrationFormData }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

//  const useRegistrationContext = () => {
//   return useContext(RegistrationContext);
// };

// export default useRegistrationContext;
