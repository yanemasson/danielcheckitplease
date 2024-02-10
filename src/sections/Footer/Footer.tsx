import {Text, TextVariant} from '../../components/Text';
import {Link} from '../../components/Link';
import MapIcon from '../../icons/ic_bx-map.svg';
import PhoneIcon from '../../icons/ic_phone-android.svg';
import MailIcon from '../../icons/ic_mail.svg';
import TwitterLogo from '../../icons/ic_twitter.svg';
import FacebookLogo from '../../icons/ic_facebook.svg';
import LinkedInLogo from '../../icons/ic_linkedin.svg';

export const Footer = () => {
  return (
    <div className=' observer flex flex-col bg-[#252B42] py-28 text-white justify-center gap-20 items-center lg:flex-row'>
      <div className='flex flex-col gap-3.5 items-center'>
        <Text variant={TextVariant.H3}>Annette Steward</Text>
        <div className='flex flex-col items-center'>
          <Link>Jennie Cooper</Link>
          <Link>Julie Henry</Link>
          <Link>Johnny Murphy</Link>
          <Link>Gregory Mccoy</Link>
          <Link>Marvin Mckinney</Link>
        </div>
      </div>

      <div className='flex flex-col gap-3.5 items-center'>
        <Text variant={TextVariant.H3}>Annette Steward</Text>
        <div className='flex flex-col items-center'>
          <Link>Jennie Cooper</Link>
          <Link>Julie Henry</Link>
          <Link>Johnny Murphy</Link>
          <Link>Gregory Mccoy</Link>
          <Link>Marvin Mckinney</Link>
        </div>
      </div>

      <div className='flex flex-col gap-3.5 items-center'>
        <Text variant={TextVariant.H3}>Annette Steward</Text>
        <div className='flex flex-col items-center'>
          <Link>Jennie Cooper</Link>
          <Link>Julie Henry</Link>
          <Link>Johnny Murphy</Link>
          <Link>Gregory Mccoy</Link>
          <Link>Marvin Mckinney</Link>
        </div>
      </div>

      <div>
        <div className='flex gap-2.5 items-center '>
          <div className={'flex flex-col w-7 items-center'}>
            <MapIcon />
          </div>
          <Text variant={TextVariant.H6}>6386 Spring St undefined Anchorage</Text>
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
        <div className='flex justify-center lg:justify-start lg:-ml-5'>
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
    </div>
  );
};
