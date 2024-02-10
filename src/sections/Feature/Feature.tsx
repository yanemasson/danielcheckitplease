import {Text, TextVariant} from '../../components/Text';
import {PlayButton} from '../../components/PlayButton';
import DrawingIcon from './icons/mdi_drawing.svg';
import DrawIcon from './icons/mdi_draw.svg';
import BrushIcon from './icons/mdi_brush.svg';
import {Column} from './components/Column';

export const Feature = () => {
  return (
    <div className='flex flex-col text-[#252B42] py-20 gap-12 items-center'>
      <div className='flex flex-col w-72 items-center text-center gap-3'>
        <Text variant={TextVariant.H2}>Features</Text>
        <Text variant={TextVariant.H4}>Most calendars are designed for teams.</Text>
      </div>
      <div className='flex py-2 bg-cover bg-[url(/video-m.jpg)] w-[386px] h-[216px] items-center justify-center shadow-xl rounded-3xl lg:order-2 lg:w-[1177px] lg:h-[658px]'>
        <PlayButton />
      </div>
      <div className='flex flex-col lg:flex-row py-5 gap-20 '>
        <Column
          H3={'OpenType features Variable fonts'}
          P={'Slate helps you see how many more days you need to work to reach your financial goal.'}
        >
          <DrawingIcon />
        </Column>
        <Column
          H3={'Design with real data'}
          P={'Slate helps you see how many more days you need to work to reach your financial goal.'}
        >
          <DrawIcon />
        </Column>
        <Column
          H3={'Fastest way to take action'}
          P={'Slate helps you see how many more days you need to work to reach your financial goal.'}
        >
          <BrushIcon />
        </Column>
      </div>
    </div>
  );
};
