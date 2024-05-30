import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-4'>
      <input
        type='text'
        placeholder='First name*'
        {...register('firstName', { required: true })}
        className='px-5 py-4 rounded-lg text-black/50'
      />
      <input
        type='text'
        placeholder='Last name*'
        {...register('lastName', { required: true })}
        className='px-5 py-4 rounded-lg text-black/50'
      />

      <input
        type='text'
        placeholder='Mail Address*'
        {...register('email', { required: true })}
        className='px-5 py-4 rounded-lg text-black/50'
      />
      <input
        type='text'
        placeholder='Phone number*'
        {...register('phoneNumber', { required: true })}
        className='px-5 py-4 rounded-lg text-black/50'
      />
      <select
        {...register('subject')}
        className='px-5 py-4 rounded-lg col-span-2 text-black/50'
      >
        <option value='subject1'>subject1</option>
        <option value='subject2'>subject2</option>
        <option value='subject3'>subject3</option>
      </select>
      <textarea
        {...register('message', {})}
        placeholder='Message... '
        className='px-5 py-4 rounded-lg col-span-2 text-black/50'
      />

      <input
        type='submit'
        className='px-10 py-4 bg-[#9A6575] rounded-full mt-5'
      />
    </form>
  );
}
