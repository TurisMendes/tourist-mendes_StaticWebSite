import React from 'react';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleClick = () => {
    const isExternalLink = link.startsWith('http') || link.startsWith('https');
    
    if (isExternalLink) {
      window.open(link, '_blank', 'noopener noreferrer');
    } else {
      navigate(link);
    }
  };

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
      onClick={handleClick}
    >
      <span
        className='text-h4 font-montserrat'>{text}
      </span>
    </button>
  );
};

export default ButtonCustom;
