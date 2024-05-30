import icon1 from '../assets/prescon-box-1.svg';
import icon2 from '../assets/prescon-box-2.svg';
import icon3 from '../assets/prescon-box-3.svg';
import AppointCard from '../components/AppointCard';

const appointStep = [
  {
    icon: icon1,
    title: 'Research and Shortlist',
    description:
      'Begin by conducting thorough research online to find reputable tax advisory companies. Look for advisors with a strong track record in providing comprehensive services, including income tax consulting, transfer pricing, and sustainable tax planning strategies. Use search engines and visit the websites of potential firms to gather information and create a shortlist.',
  },
  {
    icon: icon2,
    title: 'Reach Out',
    description:
      'Reach out to the selected advisory firms for a preliminary conversation. Discuss your specific needs, such as compliance advisory services, transfer pricing, or tax rates. This step allows you to gauge their expertise, customer service quality, and how well they understand the nuances of your industry and business model.',
  },
  {
    icon: icon3,
    title: 'Make a Decision',
    description:
      'Make your final decision based on the company’s expertise, industry experience, and client feedback. Consider their global and local advisory capabilities, the breadth of their services, and how well they can partner with you to address your taxation and compliance needs. Once you have all the necessary information, proceed to appoint your chosen tax advisory company.',
  },
];

const Appoint = () => {
  return (
    <section className='w-full pt-56 pb-20 text-white bg-[#5E464E]'>
      <div className='w-2/3 mx-auto'>
        <h2 className='text-5xl font-bold mb-16 leading-snug'>
          HOW TO APPOINT <br />A MALAYSIA TAX ADVISORY COMPANY ONLINE?
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
