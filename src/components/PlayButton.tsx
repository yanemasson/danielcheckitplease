import {ButtonHTMLAttributes} from 'react';
import PlayIcon from '../icons/video-button-2.svg';

export const PlayButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className='flex bg-[#2091F9] rounded-full justify-center items-center pl-1 h-[62px] w-[62px]'>
      <PlayIcon />
    </button>
  );
};

