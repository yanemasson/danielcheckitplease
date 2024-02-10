import {ButtonHTMLAttributes} from 'react';
import BurgerIcon from '../icons/burger.svg';

export const BurgerButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className='text-white active:text-blue-600 active:scale-90 transition-all'>
      <BurgerIcon />
    </button>
  );
};
