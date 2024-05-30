import icon1 from '../assets/prescon-box-1.svg';
import icon2 from '../assets/prescon-box-2.svg';
import icon3 from '../assets/prescon-box-3.svg';
import icon4 from '../assets/prescon-box-4.svg';
import icon5 from '../assets/prescon-box-5.svg';
import ChooseCard from '../components/ChooseCard';

const tips = [
  {
    icon: icon1,
    description:
      'Check the company’s qualifications and credentials, such as certifications and accreditations.',
  },
  {
    icon: icon2,
    description:
      'Look for a company with a strong track record and experience in providing tax compliance services.',
  },
  {
    icon: icon3,
    description:
      'Read client testimonials and reviews to gauge the company’s reputation and client satisfaction levels.',
  },
  {
    icon: icon4,
    description:
      'Ensure clear communication and effective responsiveness from the company during the decision-making process.',
  },
  {
    icon: icon5,
    description:
      'Consider the company’s fees and pricing structure, ensuring it aligns with your budget and expectations.',
  },
];

const Choose = () => {
  return (
    <section className='w-full py-52'>
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
