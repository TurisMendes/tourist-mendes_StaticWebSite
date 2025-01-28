import React from 'react';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary' | 'secondary-dark';
  content?: string;
  link: string;
  onClick?: () => void;
  width?: string;
}

const ButtonCustom: React.FC<ButtonProps> = ({
  text,
  variant,
  content,
  link,
  width
}) => {

  const getButtonClass = () => {
    switch (variant) {
      case 'primary':
        return 'button-primary';
      case 'secondary':
        return 'button-secondary';
      case 'secondary-dark':
        return 'button-secondary-dark';
      default:
        return 'button-primary';
    }
  };

  return (
    <button
      className={`${getButtonClass()} ${width}`}
      aria-label={`${text} sobre ${content}`}
      onClick={() => window.location.href = link}
    >
      <span
        className='text-h4 font-montserrat'>{text}
      </span>
    </button>
  );
};

export default ButtonCustom;
