import {Text, TextVariant} from '../../components/Text';
import TwitterLogo from '../../icons/ic_twitter.svg';
import FacebookLogo from '../../icons/ic_facebook.svg';
import LinkedinLogo from '../../icons/ic_linkedin.svg';
import MapIcon from '../../icons/ic_bx-map.svg';
import PhoneIcon from '../../icons/ic_phone-android.svg';
import MailIcon from '../../icons/ic_mail.svg';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {useMediaBreakpoint} from '../../hooks/useMediaBreakpoint.ts';

export const Contact = () => {
  const breakpoint = useMediaBreakpoint('lg');

  return (
    <div className='flex flex-col items-center text-[#252B42] px-8 py-24 gap-24'>
      <div className='flex flex-col items-center text-center py-12'>
        <Text variant={TextVariant.H2}>Contact Us</Text>
        <Text variant={TextVariant.H4}>Most calendars are designed for teams.</Text>
      </div>
      {!breakpoint && (
        <div className='flex items-center p-3 gap-6'>
          <TwitterLogo />
          <FacebookLogo />
          <LinkedinLogo />
        </div>
      )}

      <div className='flex flex-col py-5 gap-2.5 items-start lg:flex-row-reverse lg:items-center'>
        <div className='flex flex-col justify-center items-start lg:gap-12 lg:pl-16'>
          <div className='flex gap-2.5 items-center '>
            <div className={'flex flex-col w-7 items-center'}>
              <MapIcon />
            </div>
            <Text variant={TextVariant.H6}>6386 Spring St undefined Anchorage, Georgia 12473 United States</Text>
          </div>
          <div className='flex gap-2.5 items-center '>
            <div className={'flex flex-col w-7 items-center'}>
              <PhoneIcon />
            </div>
            <Text variant={TextVariant.H6}>(843) 555-0130</Text>
          </div>
          <div className='flex gap-2.5 items-center '>
            <div className={'flex flex-col w-7 items-center'}>
              <MailIcon />
            </div>
            <Text variant={TextVariant.H6}>willie.jennings@example.com</Text>
          </div>
          {breakpoint && (
            <div className='flex items-center -ml-2 gap-6'>
              <TwitterLogo />
              <FacebookLogo />
              <LinkedinLogo />
            </div>
          )}
        </div>
        <form className='flex flex-col p-12 items-center gap-12 rounded-2xl border border-gray self-center shadow-lg '>
          <Text variant={TextVariant.H3}>Contact Us</Text>
          <Input placeholder='Your Name' />
          <Input placeholder='Your Email' />
          <Input placeholder='Your Message' />
          <Button>Send</Button>
        </form>
      </div>
    </div>
  );
};
