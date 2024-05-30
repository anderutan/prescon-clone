import ListItem from '../components/ListItem';
import ServiceCard from '../components/ServiceCard';
import bgImg from '../assets/prescon-role-and-responsibilities.svg';

const roleList = [
  'Assessing your tax compliance needs and requirements',
  'Ensuring accurate and timely filing of tax returns',
  'Managing and resolving tax-related issues or disputes',
  'Providing advice on tax matters and implications',
  'Keeping you informed about any changes in tax regulations',
];

const typeOfServicesList = [
  {
    title: 'Corporate Income Tax',
    description:
      'Corporate income tax is a significant aspect of tax compliance for businesses in Malaysia. Our expert tax consultants assist in calculating, reporting, and filing your corporate income tax returns accurately and on time. We stay up to date with the latest tax laws and regulations to ensure your business remains compliant and avoids penalties.',
  },
  {
    title: 'Withholding Tax',
    description:
      'Withholding tax is another crucial area of tax compliance for businesses that make payments to non-residents. Our tax consultants provide guidance on the applicability of withholding tax, assist in the determination of withholding tax rates, and ensure compliance with reporting and filing requirements.',
  },
  {
    title: 'Company Tax Return',
    description:
      'Timely and accurate filing of company tax returns is essential to remain compliant with Malaysian tax laws. Our tax consultants prepare and file company tax returns on your behalf, ensuring that all required information is accurately reported and any tax reliefs or incentives are appropriately claimed.',
  },
  {
    title: 'Stamp Duty',
    description:
      'Stamp duty is a tax imposed on various instruments and transactions in Malaysia. Our tax consultants provide advice on stamp duty implications and assist in the proper calculation, reporting, and payment of stamp duty as required by law.',
  },
  {
    title: 'Tax Planning',
    description:
      'Tax planning is a proactive approach to minimize tax liabilities within the legal framework. Our tax consultants work closely with your business to develop effective tax planning strategies that optimize your tax position while ensuring compliance with all tax laws and regulations.',
  },
  {
    title: 'Transfer Pricing',
    description:
      'Transfer pricing refers to the pricing of transactions between related entities. Our tax consultants assist businesses in managing transfer pricing risks by ensuring compliance with the transfer pricing regulations and providing documentation support to justify the arm’s length nature of related-party transactions.',
  },
];

const RoleAndResponsibilities = () => {
  return (
    <section className='w-full pt-56 pb-28 relative'>
      <img
        src={bgImg}
        alt='Prescon Role and Responsibilities'
        className='absolute bottom-0 left-5'
      />
      <div className='w-2/3 mx-auto'>
        <div className='w-[70%] ml-auto'>
          <h2 className='text-5xl font-bold mb-16 leading-snug'>
            ROLE AND RESPONSIBILITIES <br />
            <span className='text-header-main'>
              OF A PRESCON TAX COMPLIANCE ADVISORY SERVICES
            </span>
          </h2>
          <div className='w-32 border-b-4 border-header-main mb-16'></div>
          <p className='text-2xl pb-10'>
            When you engage our tax compliance advisory services, you can expect
            a wide range of support and expertise. Our role and responsibilities
            include:
          </p>
          <ul className='pb-12 flex flex-col gap-3 text-lg'>
            {roleList.map((role) => (
              <ListItem>{role}</ListItem>
            ))}
          </ul>
          <p className='text-2xl pb-10'>
            With Prescon Malaysia, you can trust that your tax compliance is in
            capable hands.
          </p>
          {typeOfServicesList.map(({ title, description }) => (
            <ServiceCard title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleAndResponsibilities;
