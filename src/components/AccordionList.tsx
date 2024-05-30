import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AccordionList() {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1' className='mb-8'>
        <AccordionTrigger className='bg-[#9A6575] text-white px-12 py-10 text-2xl text-left text-left'>
          What is tax compliance advisory?
        </AccordionTrigger>
        <AccordionContent className='px-12 py-7 text-lg'>
          Tax compliance advisory is a professional service that offers guidance
          to individuals and businesses to ensure they understand and adhere to
          all applicable tax laws and regulations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2' className='mb-8'>
        <AccordionTrigger className='bg-[#9A6575] text-white px-12 py-10 text-2xl text-left'>
          How can a tax consultant provide ongoing tax planning and advice to
          individuals or businesses to optimize their financial strategies?
        </AccordionTrigger>
        <AccordionContent className='px-12 py-7 text-lg'>
          A tax consultant can offer ongoing tax planning and advice by
          regularly reviewing a client’s financial situation, staying updated on
          tax legislation changes, and recommending tailored strategies to
          maximize tax efficiency and savings.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3' className='mb-8'>
        <AccordionTrigger className='bg-[#9A6575] text-white px-12 py-10 text-2xl text-left'>
          What is the process typically followed by a tax consultant when
          preparing and filing tax returns for clients?
        </AccordionTrigger>
        <AccordionContent className='px-12 py-7 text-lg'>
          A tax consultant typically assesses the client’s financial documents,
          calculates tax liabilities or refunds, ensures compliance with tax
          laws, and files the tax return with the relevant authorities.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4' className='mb-8'>
        <AccordionTrigger className='bg-[#9A6575] text-white px-12 py-10 text-2xl text-left'>
          How much does it cost to hire a tax consultant service company in
          Malaysia?
        </AccordionTrigger>
        <AccordionContent className='px-12 py-7 text-lg'>
          The cost to hire a tax consultant service company in Malaysia varies
          widely, typically ranging from a few hundred to several thousand MYR
          depending on the complexity of the case and the reputation of the
          consultancy.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
