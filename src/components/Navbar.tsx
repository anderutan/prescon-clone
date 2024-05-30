import { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

type menuItem = {
  title: string;
  link: string;
  sublink?: menuItem[];
};

const navMenu: menuItem[] = [
  {
    title: 'HOME',
    link: '#',
  },
  {
    title: 'ABOUT PRESCON HALLMARK',
    link: '#',
  },
  {
    title: 'OUR SERVICES',
    link: '#',
    sublink: [
      {
        title: 'Company Secretary',
        link: '#',
      },
      {
        title: 'Business Management',
        link: '#',
      },
      {
        title: 'Tax Compliance Advisory',
        link: '#',
      },
      {
        title: 'Assurance & Advisory',
        link: '#',
      },
    ],
  },
  {
    title: 'NEWS & UPDATES',
    link: '#',
  },
  {
    title: 'CONTACT',
    link: '#',
  },
];

const Navbar = () => {
  const [hover, setHover] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setHover(title);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <nav className='absolute w-full border-b border-[#C7B7B7] border-opacity-40'>
      <div className='w-2/3 mx-auto'>
        <div className='flex text-white gap-10 text-sm'>
          {navMenu.map(({ link, title, sublink }) => (
            <div
              key={title}
              className='relative'
              onMouseEnter={() => handleMouseEnter(title)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={link} className='flex gap-2 items-center py-5'>
                {title} {sublink && <TiArrowSortedDown className='relative' />}
              </a>
              {sublink && hover === title && (
                <Submenu
                  sublink={sublink}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  parentTitle={title}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Submenu = ({
  sublink,
  handleMouseEnter,
  handleMouseLeave,
  parentTitle,
}: {
  sublink: menuItem[];
  handleMouseEnter: (title: string) => void;
  handleMouseLeave: () => void;
  parentTitle: string;
}) => {
  return (
    <div
      className='absolute top-15 w-[230px] bg-white text-black p-5 flex flex-col gap-1 rounded-b-md'
      onMouseEnter={() => handleMouseEnter(parentTitle)}
      onMouseLeave={handleMouseLeave}
    >
      {sublink.map(({ link, title }) => (
        <a
          href={link}
          key={title}
          className='text-sm font-light border-b last:border-none pb-2'
        >
          {title}
        </a>
      ))}
    </div>
  );
};
