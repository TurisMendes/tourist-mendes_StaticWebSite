import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  attraction?: string;
  textColor?: string;
}

const ButtonCustom: React.FC<ButtonProps> = ({
  text,
  variant,
  attraction,
  textColor = 'text-white',
}) => {
  const buttonClasses = clsx(
    'flex items-center justify-center w-[123px] h-10 border-2 rounded-full transition duration-50 group',
    {
      'bg-primary dark:bg-secondary hover:bg-primaryDark dark:hover:bg-primaryDark active:bg-secondaryDark active:border-grey dark:active:bg-secondary border-white hover:border-primary lg:border-primary dark:border-primaryDark':
        variant === 'primary',
      'bg-transparent hover:bg-primary active:bg-primaryDark border-primary dark:border-primaryDark hover:border-primary':
        variant !== 'primary',
    }
  );

  const textClasses = clsx(
    'font-montserrat font-bold leading-5',
    textColor,
    {
      'dark:text-white group-hover:text-white': variant !== 'primary',
    }
  );

  return (
    <a
      href="#"
      className={buttonClasses}
      aria-label={`${text} sobre ${attraction ?? ''}`}
    >
      <p className={textClasses}>{text}</p>
    </a>
  );
};

export default ButtonCustom;
