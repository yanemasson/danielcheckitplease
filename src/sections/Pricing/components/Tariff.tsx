import {Text, TextVariant} from '../../../components/Text';
import {Link} from '../../../components/Link';
import {Button, StyleVariant as ButtonStyleVariant} from '../../../components/Button';

export enum StyleVariant {
  White = 'white',
  Blue = 'blue',
}

type TariffProps = {
  name: string;
  price: number;
  color?: StyleVariant;
};

export const Tariff = ({name, price, color = StyleVariant.White}: TariffProps) => {
  const variantStyle = styleMap[color].style;
  const buttonStyle = styleMap[color].buttonStyle;
  return (
    <div
      className={`flex flex-col my-20 p-10 gap-7 w-80 items-center rounded-xl ${variantStyle} lg:hover:shadow-[0_0_10px] lg:hover:py-20  lg:hover:my-0 transition-all `}
    >
      <div className='flex flex-col items-center w-36'>
        <Text variant={TextVariant.H3}>{name}</Text>
        <Text variant={TextVariant.H6}>Organize across all apps by hand</Text>
      </div>

      <div className='flex items-center justify-center h-16 '>
        <Text variant={TextVariant.H1}>{price}</Text>
        <div className='flex flex-col items-start '>
          <p className={'text-xl font-bold'}>$</p>
          <p className={'text-sm'}>Per Month</p>
        </div>
      </div>
      <li className='flex flex-col items-center w-36'>
        <Link to='#'>Pricing Feature</Link>
        <Link to='#'>Pricing Feature</Link>
        <Link to='#'>Pricing Feature</Link>
      </li>
      <div className='flex flex-col items-center text-black '>
        <Button Color={buttonStyle}>Order Now</Button>
      </div>
    </div>
  );
};

const styleMap = {
  [StyleVariant.White]: {style: 'bg-white text-black shadow-black', buttonStyle: ButtonStyleVariant.Blue},
  [StyleVariant.Blue]: {style: 'bg-[#2091F9] text-white shadow-white', buttonStyle: ButtonStyleVariant.White},
};
