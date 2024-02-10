import {Text, TextVariant} from '../../components/Text';
import Image from './images/container.svg';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {useMediaBreakpoint} from '../../hooks/useMediaBreakpoint.ts';

export const Cta = () => {
  const isUpLarge = useMediaBreakpoint('lg');
  if (isUpLarge) {
    return (
      <div className='text-[#252B42] flex items-center justify-center py-11 gap-16 text-center'>
        <div>
          <Image />
        </div>
        <div className='w-[544px] px-16 flex flex-col items-start'>
          <div className='text-start gap-2'>
            <Text variant={TextVariant.H3}>At your fingertips</Text>
            <Text variant={TextVariant.H2}>Lightning fast prototyping </Text>
          </div>
          <div className='p-2.5 flex flex-col items-start w-96'>
            <Text variant={TextVariant.H3}>Subscribe to our Newsletter</Text>
            <Text variant={TextVariant.P}>Available exclusivery on Figmaland</Text>
            <div className='flex py-8 px-2.5 gap-3'>
              <div className='w-64 flex'>
                <Input placeholder='Your email' />
              </div>
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='text-[#252B42] flex flex-col items-center py-20 gap-16 text-center'>
      <div className='px-6'>
        <Text variant={TextVariant.H3}>At your fingertips</Text>
        <Text variant={TextVariant.H2}>Lightning fast prototyping </Text>
      </div>
      <div>
        <Image />
      </div>
      <div className='p-3 flex flex-col gap-3 w-96'>
        <Text variant={TextVariant.H3}>Subscribe to our Newsletter</Text>
        <Text variant={TextVariant.P}>Available exclusive on Figmaland</Text>
        <div className=' text-white flex flex-col py-6 gap-3'>
          <Input />
          <Button>
            <div className={'w-60'}></div>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
