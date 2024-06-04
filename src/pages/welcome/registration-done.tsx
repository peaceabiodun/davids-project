import { useNavigate } from 'react-router-dom';
import WelcomeImage from '../../assets/images/welcome.png';

const RegistrationDone = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center p-10'>
      <img src={WelcomeImage} alt='welcome' className='w-[180px] h-[180px]' />
      <h1 className='my-3 text-2xl md:text-4xl font-bold text-center'>
        Student has been added to the portal Sucessfully
      </h1>
      <button
        onClick={() => navigate('/dashboard')}
        className='text-white bg-black p-2 rounded-md mt-5 w-[200px] h-[52px] text-sm'
      >
        Dashboard
      </button>
    </div>
  );
};

export default RegistrationDone;
