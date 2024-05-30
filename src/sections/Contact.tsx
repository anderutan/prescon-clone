import ContactForm from '../components/ContactForm';
import contactBg from '../assets/prescon-contact-background.svg';

const Contact = () => {
  return (
    <section className='w-full py-52 pb-96 bg-bg-second text-white relative'>
      <img
        src={contactBg}
        alt='Contact Prescon'
        className='absolute bottom-0 -left-24'
      />
      <div className='w-2/3 mx-auto flex'>
        <div className='flex-[1.5]'>
          <h2 className='text-5xl font-bold mb-5 leading-snug'>
            <span className='text-header-main'>CONTACT US</span> RIGHT NOW
          </h2>
          <p className='text-2xl mb-16'>
            TO LEARN MORE ABOUT PRESCON HALLMARK TAX CONSULTANT SERVICE
          </p>
          <div className='w-32 border-b-4 border-header-main mb-10'></div>
          <p className='text-lg pb-16'>
            Are you ready to experience the best tax compliance services in
            Malaysia? Contact us today to learn more about our Prescon Hallmark
            Tax Consultant Service. Our team of dedicated tax consultants is
            here to assist you in achieving compliance while optimizing your tax
            position. Reach out to us now to explore how we can help your
            business thrive.
          </p>
        </div>
        <div className='flex-1 pl-40'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
