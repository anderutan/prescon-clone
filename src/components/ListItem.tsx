import { FaSquareFull } from 'react-icons/fa';

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className='flex items-center gap-3'>
      <span className='text-xs text-[#5E464E]'>
        <FaSquareFull />
      </span>
      {children}
    </li>
  );
};

export default ListItem;
