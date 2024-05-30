type Props = {
  icon: string;
  title: string;
  description: string;
};

const HeaderInfo = ({ icon, title, description }: Props) => {
  return (
    <div>
      <div className='flex gap-1'>
        <img src={icon} alt={title} />
        <p className='font-semibold text-icon-dot'>{title}</p>
      </div>
      <p className='text-sm'>{description}</p>
    </div>
  );
};

export default HeaderInfo;
