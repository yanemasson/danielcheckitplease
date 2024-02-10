import {AnchorHTMLAttributes} from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: string;
};

export const Link = ({to, ...props}: LinkProps) => {
  return <a {...props} className='text-[15px] p-3 font-normal tracking-[.2px]' href={to} />;
};
