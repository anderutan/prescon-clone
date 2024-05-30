type Props = {
  img: string;
  title: string;
  description: string;
};

const FeatureCard = ({ img, title, description }: Props) => {
  return (
    <div className='px-11 py-16 pr-20 mb-10 border border-[#707070] bg-white'>
      <div className='flex gap-7 items-center pb-14'>
        <img src={img} alt={title} />
        <h4 className='text-3xl font-medium'>{title}</h4>
      </div>
      <p className='text-lg'>{description}</p>
    </div>
  );
};

export default FeatureCard;
