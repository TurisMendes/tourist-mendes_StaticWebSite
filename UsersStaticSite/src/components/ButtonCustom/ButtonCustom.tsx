import React from 'react';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  attraction?: string;
  link: string;
}

const ButtonCustom: React.FC<ButtonProps> = ({
  text,
  variant,
  attraction,
  link
}) => {

  return (
    <button
      className={variant === 'primary' ? 'button-primary' : 'button-secondary'}
      aria-label={`${text} sobre ${attraction ?? ''}`}
    >
      <a
        href={link}
        className='text-h4'>{text}</a>
    </button>
  );
};

export default ButtonCustom;
