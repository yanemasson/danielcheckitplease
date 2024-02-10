import {InputHTMLAttributes} from 'react';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} type='text' className='border border-[#E8E8E8] bg-gray-100 py-5 px-8 rounded-3xl' />;
};
