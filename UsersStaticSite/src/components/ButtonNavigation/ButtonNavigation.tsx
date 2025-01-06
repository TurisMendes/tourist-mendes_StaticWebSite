import React from 'react';

interface ButtonNavigationProps {
  direction: string;
}

function ButtonNavigation(props: ButtonNavigationProps): React.ReactNode {
  const { direction } = props;

  return (
    <button className={`flex items-center justify-center ${direction === 'right' ? 'rotate-180' : ''} bg-offwhite rounded-full w-14 h-14 hover:bg-grey`}>
      <img src="./src/assets/icons/Arrow.svg" alt={`Seta para ${direction}`} />
    </button>
  );
}

export default ButtonNavigation;
