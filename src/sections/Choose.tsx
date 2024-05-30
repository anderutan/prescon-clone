import ChooseCard from '../components/ChooseCard';
import { tips } from '@/lib/data';

const Choose = () => {
  return (
    <section className='w-full py-52 bg-[#C2C1C0] bg-opacity-10'>
      <div className='w-2/3 mx-auto'>
        <h2 className='text-5xl font-bold mb-16 leading-snug'>
          HOW TO CHOOSE A RELIABLE <br />
          <span className='text-[#9A6575]'>
            AND QUALIFIED TAX CONSULTANT SERVICE COMPANY IN MALAYSIA?
          </span>
        </h2>
        <div className='w-32 border-b-4 border-[#9A6575] mb-16'></div>
        <p className='text-2xl pb-16'>
          When selecting a tax consultant service company in Malaysia, keep
          these five tips in mind:
        </p>
        <div className='flex flex-col gap-8'>
          {tips.map(({ icon, description }) => (
            <ChooseCard icon={icon} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
