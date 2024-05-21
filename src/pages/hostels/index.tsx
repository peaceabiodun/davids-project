import EmptyState from '../../components/empty-state';

const Hostels = () => {
  return (
    <EmptyState
      title='No rooms available in the Hostel'
      buttonText='Register for a room +'
      subtext='Rooms available will show up here'
    />
  );
};

export default Hostels;
