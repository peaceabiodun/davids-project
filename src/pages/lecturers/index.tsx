import EmptyState from '../../components/empty-state';

const Lecturers = () => {
  return (
    <EmptyState
      title='No Registerd Lecturers available'
      buttonText='Register  +'
      subtext='Lecturers available will show up here'
    />
  );
};

export default Lecturers;
