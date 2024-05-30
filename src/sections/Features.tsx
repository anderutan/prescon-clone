import featureImg1 from '../assets/prescon-expert-guidance-and-advice-mobile.png.png';
import featureImg2 from '../assets/prescon-thorough-review-and-analysis-mobile.png';
import featureImg3 from '../assets/prescon-customized-tax-planning-strategies-mobile.png';
import FeatureCard from '../components/FeatureCard';

const featuresList = [
  {
    img: featureImg1,
    title: 'Expert Guidance and Advice',
    description:
      'Our team of highly skilled tax consultants is well-versed in the latest tax laws and regulations. We provide expert guidance and advice tailored to your specific business needs. With us by your side, you can navigate the complex world of tax compliance with ease. Our tax consultants have years of experience working with businesses of all sizes and industries. They stay up-to-date with the ever-changing tax landscape, ensuring that you receive the most accurate and relevant advice. Whether you have questions about deductible expenses, tax credits, or international tax obligations, our experts are here to help.',
  },
  {
    img: featureImg2,
    title: 'Thorough Review and Analysis',
    description:
      'We conduct a thorough review and analysis of your financial records to ensure accurate tax reporting. Our consultants meticulously examine your income, expenses, and deductions to identify any potential compliance issues or opportunities for tax optimization. Our review process goes beyond simply checking for errors. We delve deep into your financial statements, looking for ways to maximize your tax savings while staying within legal boundaries. Our consultants are trained to spot red flags and potential audit triggers, allowing you to address them proactively.',
  },
  {
    img: featureImg3,
    title: 'Customized Tax Planning Strategies',
    description:
      'Every business has unique tax planning needs. We develop customized tax planning strategies that align with your goals and objectives. Our expert consultants work with you to identify tax-saving opportunities and ensure tax efficiency for your business. Our consultants take the time to understand your business inside and out. We analyze your financial goals, cash flow, and long-term plans to create a tailored tax plan that maximizes your savings. Whether it’s optimizing your deductions, exploring tax credits, or implementing tax-efficient structures, we have the expertise to help you navigate the complexities of tax planning.',
  },
];

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
