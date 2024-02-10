import {Text, TextVariant} from '../../components/Text';
import {Button} from '../../components/Button';
import {useMediaBreakpoint} from '../../hooks/useMediaBreakpoint.ts';

export const Hero = () => {
  const isUpLarge = useMediaBreakpoint('lg');
  return (
    <header
      className=' observer pb-8 pt-36 px-5 bg-[url(/bg.jpg)] isolate relative bg-cover bg-top bg-no-repeat
    before:inset-0 before:absolute before:w-full before:h-full before:block before:bg-black/40 '
    >
      <div className='flex flex-col relative items-center z-10 py-12 gap-16'>
        <div className='flex flex-col gap-2 text-center text-white'>
          <Text variant={isUpLarge ? TextVariant.H1 : TextVariant.H2}>The best products start with Figma</Text>
          <Text variant={TextVariant.H4}>Most calendars are designed for teams.</Text>
        </div>
        <div className='font-bold'>
          <Button>Try For Free</Button>
        </div>
        <div className='h-32'></div>
      </div>
    </header>
  );
};
