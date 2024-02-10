import {Text, TextVariant} from '../../../components/Text';
import {ReactNode} from 'react';

type ColumnProps = {
  H3: string;
  P: string;
  children: ReactNode;
};

export const Column = ({H3, P, children}: ColumnProps) => {
  return (
    <div className='w-64 p-3 flex gap-[10px] flex-col m-auto text-center items-center'>
      {children}
      <Text variant={TextVariant.H3}>{H3}</Text>
      <Text variant={TextVariant.P}>{P}</Text>
    </div>
  );
};
