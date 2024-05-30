import serviceImg from '../assets/prescon-tax-compliance-advisory-service-mobile.png';

const Service = () => {
  return (
    <section className='w-2/3 py-48 mx-auto flex items-center'>
      <div className='flex-1'>
        <img src={serviceImg} alt='Tax Compliance Advisory Service' />
      </div>
      <div className='flex-1'>
        <h2 className='text-6xl font-bold mb-20'>
          <span className='text-header-main leading-normal'>
            TAX COMPLIANCE
          </span>
          <br />
          ADVISORY SERVICE
        </h2>
        <div className='w-32 border-b-4 border-header-main mb-10'></div>
        <h3 className='text-3xl mb-16'>
          Best Compliance Services In <br /> Prescon Malaysia
        </h3>
        <p className='text-xl'>
          In today's complex and ever-changing tax landscape, individuals and
          businesses must stay compliant and avoid any potential legal issues.
          That's where Prescon Malaysia comes in to provide the best tax
          compliance advisory services in the country.
        </p>
      </div>
    </section>
  );
};

export default Service;
