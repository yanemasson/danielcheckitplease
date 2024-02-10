import {Text, TextVariant} from '../../components/Text';
import LogoIBM from './images/logos_ibm.svg';
import Avatar from './images/Ellipse 2.svg';
import {Button} from '../../components/Button';
import {useMediaBreakpoint} from '../../hooks/useMediaBreakpoint.ts';

export const Testimonails = () => {
  const isUpLarge = useMediaBreakpoint('lg');
  return (
    <div className='flex flex-col lg:px-60 py-24 gap-20 text-center items-center text-[#252B42]'>
      <Text variant={TextVariant.H2}>Testimonials</Text>
      <div className='flex flex-col py-4 gap-12 items-center'>
        <LogoIBM />
        {isUpLarge ? (
          <Text variant={TextVariant.H4}>
            Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their
            schedule.
          </Text>
        ) : (
          <p className='font-bold'>
            Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their
            schedule.
          </p>
        )}

        <div className='flex gap-2.5 items-center'>
          <Avatar />
          <div className='flex flex-col items-start'>
            <p className='font-bold'>Organize across</p>
            <p>Ui designer</p>
          </div>
        </div>
      </div>
      <div className='font-bold'>
        <Button>More Testimonials</Button>
      </div>
    </div>
  );
};
