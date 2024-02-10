import {ButtonHTMLAttributes} from 'react';

export enum StyleVariant {
  White = 'white',
  Blue = 'blue',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Color?: StyleVariant;
};

export const Button = ({Color = StyleVariant.Blue, ...props}: ButtonProps) => {
  const variantStyle = styleMap[Color];
  return (
    <div className='flex flex-col text-white w-60'>
      <button {...props} className={`text-xl min-w-[50%] rounded-full p-4 ${variantStyle}`} />
    </div>
  );
};

const styleMap = {
  [StyleVariant.White]: ' bg-white text-black',
  [StyleVariant.Blue]: ' bg-[#2091F9] text-white',
};
