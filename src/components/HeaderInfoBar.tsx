import emailIcon from '../assets/prescon-icon-email.svg';
import phoneIcon from '../assets/prescon-icon-phone.svg';
import operatingIcon from '../assets/prescon-icon-operating.svg';
import locationIcon from '../assets/prescon-icon-location.svg';
import logo from '../assets/prescon-logo-main.svg';
import HeaderInfo from './HeaderInfo';

const HeaderInfoBar = () => {
  return (
    <div className='w-2/3 mx-auto py-2 flex justify-between items-center h-[100px]'>
      <div>
        <img src={logo} alt='prescon-logo' />
      </div>
      <div className='w-2/3 flex justify-evenly'>
        <HeaderInfo
          icon={emailIcon}
          title='Mail to us'
          description='enquiry@prescon.com.my'
        />
        <HeaderInfo
          icon={phoneIcon}
          title='Hotline'
          description='+6012-258-5017'
        />
        <HeaderInfo
          icon={operatingIcon}
          title='Mon - Fri'
          description='Mon - Fri'
        />
        <HeaderInfo
          icon={locationIcon}
          title='Location'
          description='Klang Valley'
        />
      </div>
    </div>
  );
};

export default HeaderInfoBar;
