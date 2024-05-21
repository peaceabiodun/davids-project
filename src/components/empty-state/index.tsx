type EmptyStateProps = {
  title: string;
  subtext: string;
  buttonText: string;
};

const EmptyState = ({ title, subtext, buttonText }: EmptyStateProps) => {
  return (
    <div className='bg-[#FAFAFA] p-4 w-full h-[90vh]'>
      <div className='m-4 bg-white rounded-md h-full flex flex-col justify-center items-center'>
        <div className='max-w-[350px]'>
          <h2 className='text-3xl font-semibold'>{title}</h2>
          <p className='text-[#55555C] mt-2'>{subtext}</p>
          <button className='mt-5 bg-black text-white text-sm rounded-lg p-2 w-[215px] h-[50px] '>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
