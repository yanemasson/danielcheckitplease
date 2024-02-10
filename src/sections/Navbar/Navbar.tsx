import {Logo} from './components/Logo';
import {Menu} from './components/Menu.tsx';
import {useMediaBreakpoint} from '../../hooks/useMediaBreakpoint.ts';
import {Link} from '../../components/Link.tsx';
import TwitterLogo from '../../icons/ic_twitter.svg';
import FacebookLogo from '../../icons/ic_facebook.svg';
import LinkedInLogo from '../../icons/ic_linkedin.svg';
import {useCallback, useEffect, useRef, useState} from 'react';

export const Navbar = () => {
  const isUpLarge = useMediaBreakpoint('lg');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerElements = useRef(document.querySelectorAll('.observer'));

  const callback: IntersectionObserverCallback = useCallback(entries => {
    entries.forEach(entry => {
      if (!isIntersecting) {
        setIsIntersecting(entry.isIntersecting);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {threshold: 0.6});
    if (observerElements.current) observerElements.current.forEach(element => observer.observe(element));
    return observer.disconnect;
  }, [observerElements]);

  return (
    <nav
      className={`h-20 fixed z-10 flex w-full items-center justify-center text-white p-4 transition-colors duration-500 bg-[#252B42]/90
        ${isIntersecting && 'bg-transparent'}`}
    >
      {isUpLarge ? (
        <div className='flex w-full items-center justify-between'>
          <div className='flex gap-5'>
            <Link to='#'>Home</Link>
            <Link to='#'>Product</Link>
            <Link to='#'>Pricing</Link>
            <Link to='#'>About</Link>
            <Link to='#'>Contact</Link>
          </div>
          <div className='absolute left-1/2 -ml-24'>
            <Logo />
          </div>

          <div className='flex'>
            <Link to={'#'}>
              <TwitterLogo />
            </Link>
            <Link to={'#'}>
              <FacebookLogo />
            </Link>
            <Link to={'#'}>
              <LinkedInLogo />
            </Link>
          </div>
        </div>
      ) : (
        <div className={'flex w-full items-center justify-between'}>
          <Logo />
          <Menu />
        </div>
      )}
    </nav>
  );
};
