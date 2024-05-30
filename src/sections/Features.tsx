import FeatureCard from '../components/FeatureCard';
import { featuresList } from '@/lib/data';

const Features = () => {
  return (
    <section className='w-full py-56 bg-[#C2C1C0] bg-opacity-10'>
      <div className='w-2/3 mx-auto'>
        <h2 className='text-5xl font-bold mb-20 leading-snug'>
          FEATURES <br />
          <span className='text-[#9A6575]'>
            OF OUR TAX COMPLIANCE ADVISORY SERVICE
          </span>
        </h2>
        <div className='w-32 border-b-4 border-[#9A6575] mb-16'></div>
        <p className='text-2xl pb-24'>
          When it comes to tax compliance, our service stands out from the rest.
          Here are three key features that set us apart:
        </p>
        {featuresList.map(({ img, title, description }) => (
          <FeatureCard img={img} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default Features;
