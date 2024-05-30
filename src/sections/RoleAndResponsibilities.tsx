import ListItem from '../components/ListItem';
import ServiceCard from '../components/ServiceCard';
import bgImg from '../assets/prescon-role-and-responsibilities.svg';
import { roleList, typeOfServicesList } from '@/lib/data';

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
            <span className='text-[#9A6575]'>
              OF A PRESCON TAX COMPLIANCE ADVISORY SERVICES
            </span>
          </h2>
          <div className='w-32 border-b-4 border-[#9A6575] mb-16'></div>
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
