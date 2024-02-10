import {useState} from 'react';
import {BurgerButton} from './BurgerButton';
import {Link} from '../../../components/Link';
import {createPortal} from 'react-dom';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BurgerButton onClick={() => setIsOpen(prev => !prev)} />
      {isOpen && <MenuList />}
    </>
  );
};

const MenuList = () => {
  return createPortal(
    <div className=' observer fixed inset-0 mt-20'>
      <div className='p-8 flex flex-col gap-8 text-white bg-slate-800/95 h-full'>
        <Link to='#'>Home</Link>
        <Link to='#'>Product</Link>
        <Link to='#'>Pricing</Link>
        <Link to='#'>About</Link>
        <Link to='#'>Contact</Link>
      </div>
    </div>,
    document.body,
  );
};
