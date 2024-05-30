type Props = {
  title: string;
  description: string;
};

const ServiceCard = ({ title, description }: Props) => {
  return (
    <div className='py-5'>
      <h4 className='text-header-main pb-3 mb-5 border-b text-2xl font-medium'>
        {title}
      </h4>
      <p className='text-lg'>{description}</p>
    </div>
  );
};

export default ServiceCard;
