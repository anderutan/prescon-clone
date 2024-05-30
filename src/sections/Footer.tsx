import footerLogo from '@/assets/prescon-logo-footer.svg';
import locationIcon from '@/assets/prescon-footer-icon-location.svg';
import phoneIcon from '@/assets/prescon-footer-icon-phone.svg';
import emailIcon from '@/assets/prescon-footer-icon-email.svg';
import facebookIcon from '@/assets/prescon-footer-icon-facebook.svg';
import instagramIcon from '@/assets/prescon-footer-icon-instagram.svg';
import linkedinIcon from '@/assets/prescon-footer-icon-linkedin.svg';
import twitterIcon from '@/assets/prescon-footer-icon-twitter.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className='w-full pt-24 bg-[#231F20] text-white'>
      <div className='w-2/3 mx-auto'>
        <div className='pb-14 grid grid-cols-9 justify-between gap-16'>
          {/* Footer column 1 */}
          <div className='col-span-2 flex flex-col gap-12'>
            <img src={footerLogo} alt='Prescon footer logo' className='w-28' />
            <p>
              We work with passion and creating another heights in our industry.
            </p>
            <div>
              <p className='text-lg text-[#9A6575] font-semibold'>
                Business Hours
              </p>
              <p className='text-sm'>Mon – Fri: 10 am – 6 pm</p>
              <p className='text-sm'>Sat, Sun & Public Holiday: CLOSED</p>
            </div>
          </div>

          {/* Footer column 2 */}
          <div className='col-span-3 flex flex-col gap-10'>
            <p className='text-2xl text-[#9A6575] font-semibold'>NEWSLETTER</p>
            <p>Subscribe our newsletter to get our latest update & news</p>
            <div className='flex w-full max-w-sm items-center -space-x-[130px]'>
              <Input
                type='email'
                placeholder='Enter your email ID'
                className='rounded-full w-[350px] px-8 text-black'
              />
              <Button
                type='submit'
                className='rounded-full uppercase px-8 bg-[#9A6575] text-white hover:bg-[#9e576c]'
              >
                Subscribe
              </Button>
            </div>
          </div>

          {/* Footer column 3 */}
          <div className='col-span-2 flex flex-col'>
            <p className='text-2xl text-[#9A6575] font-semibold mb-10'>
              CONTACT INFO
            </p>
            <div className='flex gap-4 items-center mb-5'>
              <img src={locationIcon} alt='location icon' />
              <p>Setia Alam HQ (Selangor)</p>
            </div>
            <div className='flex gap-4 items-center mb-5'>
              <img src={phoneIcon} alt='phone icon' />
              <p>+6(012)-258 5017 </p>
            </div>
            <div className='flex gap-4 items-center mb-5'>
              <img src={emailIcon} alt='email icon' />
              <p>enquiry@prescon.com.my</p>
            </div>
          </div>

          {/* Footer column 4 */}
          <div className='col-span-2 flex flex-col'>
            <p className='text-2xl text-[#9A6575] font-semibold mb-10'>
              CONNECT WITH US
            </p>
            <div className='flex gap-6'>
              <a href='#'>
                <img src={facebookIcon} alt='facebook icon' />
              </a>
              <a href='#'>
                <img src={instagramIcon} alt='instagram icon' />
              </a>
              <a href='#'>
                <img src={linkedinIcon} alt='linkedin icon' />
              </a>
              <a href='#'>
                <img src={twitterIcon} alt='twitter icon' />
              </a>
            </div>
          </div>
        </div>
        <div className='border-t border-white border-opacity-20'>
          <p className='py-9 text-white/35 text-sm text-center'>
            © PRESCON HALLMARK SDN BHD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
