import { RegistrationProvider } from '../../context/registration-context';
import RegisterContent from './content';

const RegisterLayout = () => {
  return (
    <RegistrationProvider>
      <RegisterContent />
    </RegistrationProvider>
  );
};

export default RegisterLayout;
