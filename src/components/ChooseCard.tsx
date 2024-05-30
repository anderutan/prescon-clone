type Props = {
  icon: string;
  description: string;
};

const ChooseCard = ({ icon, description }: Props) => {
  return (
    <div className='p-5 border border-border-color flex gap-3 items-center'>
      <img src={icon} alt='icon' />
      <p className='text-lg'>{description}</p>
    </div>
  );
};

export default ChooseCard;
