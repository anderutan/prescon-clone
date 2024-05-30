import AccordionList from '@/components/AccordionList';

const FAQ = () => {
  return (
    <section className='w-full py-40'>
      <div className='w-2/3 mx-auto'>
        <h2 className='text-5xl font-bold mb-16 leading-snug'>FAQ</h2>
        <div className='w-32 border-b-4 border-[#9A6575] mb-16'></div>
        <AccordionList />
      </div>
    </section>
  );
};

export default FAQ;
