import {Text, TextVariant} from '../../components/Text';
import {StyleVariant, Tariff} from './components/Tariff';

export const Pricing = () => {
  return (
    <div className='flex flex-col px-7 py-24 gap-2 justify-center items-center pt-2.5 text-white -mx-3 bg-[#252B42]'>
      <div className='flex flex-col items-center text-center '>
        <Text variant={TextVariant.H2}>Pricing</Text>
        <Text variant={TextVariant.H4}>Most calendars are designed for teams.</Text>
      </div>
      <div className='flex flex-col lg:flex-row gap-12 items-center justify-center '>
        <Tariff name={'FREE'} price={0}></Tariff>
        <Tariff name={'STANDARD'} price={10} color={StyleVariant.Blue}></Tariff>
        <Tariff name={'BUSINESS'} price={99}></Tariff>
      </div>
    </div>
  );
};
