import {Text, TextVariant} from '../../components/Text';
import GoogleLogo from './images/logos_google.svg';
import AmazonLogo from './images/logos_amazon.png';
import MicrosoftLogo from './images/logos_microsoft.png';
import DropBoxLogo from './images/logos_dropbox.png';
import {Button} from '../../components/Button';
import {useState} from 'react';

export const Partner = () => {
  const [partners, setPartners] = useState({
    elements: [
      <div className='flex flex-col px-10 py-6 gap-4 items-center'>
        <Text variant={TextVariant.H6}>Client Name</Text>
        <GoogleLogo />
      </div>,
      <div className='flex flex-col px-10 py-6 gap-4 items-center'>
        <Text variant={TextVariant.H6}>Client Name</Text>
        <img alt='Amazon' src={AmazonLogo} />
      </div>,
      <div className='flex flex-col px-10 py-6 gap-4 items-center'>
        <Text variant={TextVariant.H6}>Client Name</Text>
        <img alt='Microsoft' src={MicrosoftLogo} />
      </div>,
      <div className='flex flex-col px-10 py-6 gap-4 items-center'>
        <Text variant={TextVariant.H6}>Client Name</Text>
        <img alt='DropBox' src={DropBoxLogo} />
      </div>,
      <div className='flex flex-col px-10 py-6 gap-4 items-center'>
        <Text variant={TextVariant.H6}>Client Name</Text>
        <GoogleLogo />
      </div>,
      <div className='flex flex-col px-10 py-6 gap-4 items-center'>
        <Text variant={TextVariant.H6}>Client Name</Text>
        <img src={AmazonLogo} />
      </div>,
      <div className='flex flex-col px-10 py-6 gap-4 items-center'>
        <Text variant={TextVariant.H6}>Client Name</Text>
        <img src={MicrosoftLogo} />
      </div>,
      <div className='flex flex-col px-10 py-6 gap-4 items-center'>
        <Text variant={TextVariant.H6}>Client Name</Text>
        <img alt='DropBox' src={DropBoxLogo} />
      </div>,
    ],
    itemsToShow: 3,
    expanded: false,
  });

  const showMore = () => {
    if (!partners.expanded) {
      return setPartners({elements: partners.elements, itemsToShow: partners.elements.length, expanded: true});
    }
    setPartners({elements: partners.elements, itemsToShow: 3, expanded: false});
  };

  return (
    <div className='flex flex-col px-5 text-[#252B42] items-center'>
      <div className='flex flex-col px-5 py-12 gap-20 items-center'>
        <div className='flex flex-col gap-2 text-center'>
          <Text variant={TextVariant.H2}>Partners</Text>
          <Text variant={TextVariant.H4}>Most calendars are designed for teams. Slate is designed for freelancers</Text>
        </div>
        <div className='flex flex-col p-5 gap-7 flex-wrap items-center justify-center lg:flex-row'>
          {partners.elements.slice(0, partners.itemsToShow).map(el => (
            <div>{el}</div>
          ))}
          <div
            className={'cursor-pointer hover:text-[#2091F9] '}
            onClick={() => {
              showMore();
            }}
          >
            <Text variant={TextVariant.H4}> {partners.expanded ? '...show less' : '...show more'}</Text>
          </div>
        </div>
      </div>
      <div className='flex flex-col text-white font-bold w-60'>
        <Button>Try For Free</Button>
      </div>
    </div>
  );
};
