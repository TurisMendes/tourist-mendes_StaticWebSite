import React from 'react';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  content: string;
  link: string;
}

const ButtonCustom: React.FC<ButtonProps> = ({
  text,
  variant,
  content,
  link
}) => {

  return (
    <button
      className={variant === 'primary' ? 'button-primary' : 'button-secondary'}
      aria-label={`${text} sobre ${content ?? ''}`}
      onClick={() => window.location.href = link}
    >
      <span
        className='text-h4'>{text}</span>
    </button>
  );
};

export default ButtonCustom;
