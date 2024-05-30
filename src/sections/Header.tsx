import HeaderInfoBar from '../components/HeaderInfoBar';
import Navbar from '../components/Navbar';
import heroImg from '../assets/Prescon-hero-image-desktop.png';

const Header = () => {
  return (
    <header className='h-[666px]'>
      <HeaderInfoBar />
      <div
        className='w-full h-[566px] relative'
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Navbar />
        <div className='w-2/3 h-full mx-auto flex flex-col justify-center'>
          <h1 className='text-white text-7xl font-bold mb-7'>
            Tax Compliance Advisory
          </h1>
          <span className='w-32 border-b-4 border-header-main'></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
