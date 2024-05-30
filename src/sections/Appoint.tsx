import AppointCard from '../components/AppointCard';
import { appointStep } from '@/lib/data';

const Appoint = () => {
  return (
    <section className='w-full pt-56 pb-20 text-white bg-[#5E464E]'>
      <div className='w-2/3 mx-auto'>
        <h2 className='text-5xl font-bold mb-16 leading-snug'>
          <span className='text-[#C2C1C0]'>HOW TO APPOINT </span>
          <br />A MALAYSIA TAX ADVISORY COMPANY ONLINE?
        </h2>
        <div className='w-32 border-b-4 border-[#9A6575] mb-16'></div>
        <p className='text-2xl pb-10'>
          If you’re looking to appoint a Malaysia tax advisory company online,
          follow these three simple steps:
        </p>
        <div className='flex gap-6 justify-between'>
          {appointStep.map(({ icon, title, description }) => (
            <AppointCard icon={icon} title={title} description={description} />
          ))}
        </div>
        <p className='text-2xl pb-10'>
          By following these steps, you can effectively select and appoint a
          Malaysia tax advisory company online that will provide valuable
          insights and services tailored to your business’s unique requirements.
        </p>
      </div>
    </section>
  );
};

export default Appoint;
