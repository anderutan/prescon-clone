type Props = {
  icon: string;
  title: string;
  description: string;
};

const AppointCard = ({ icon, title, description }: Props) => {
  return (
    <div className='p-6 pb-16 my-20 flex flex-col gap-12 bg-white text-black'>
      <img src={icon} alt={title} className='h-24 w-36' />
      <h4 className='text-3xl font-medium'>{title}</h4>
      <p className='text-lg leading-6'>{description}</p>
    </div>
  );
};

export default AppointCard;
