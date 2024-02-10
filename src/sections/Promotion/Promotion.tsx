import {Text, TextVariant} from '../../components/Text';
import {Button} from '../../components/Button';
import MacbookImage from './images/Macbook Pro.svg';

export const Promotion = () => {
  return (
    <div className='text-[#252B42] py-7 px-5 flex flex-col gap-3 justify-center items-center lg:flex-row lg:p-64 lg:gap-12'>
      <div className='flex flex-col items-start gap-16 py-7'>
        <div className='flex flex-col gap-2 text-center items-center'>
          <Text variant={TextVariant.H2}>Fastest way to organize </Text>
          <Text variant={TextVariant.H4}>Most calendars are designed for teams.</Text>
        </div>
        <div className='flex flex-col px-3 w-60 text-white items-start font-bold w-60'>
          <Button>Try For Free</Button>
        </div>
      </div>
      <div>
        <MacbookImage />
      </div>
    </div>
  );
};
