import React, { ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
}) => {
  return (
    <div className={`w-full overflow-hidden flex justify-start lg:justify-center items-center px-auto`}>
      <div
        className="flex w-full 2xl:w-4/5 lg:flex-wrap gap-4 justify-start lg:justify-center overflow-x-auto overflow-y-hidden snap-x snap-mandatory lg:snap-none touch-pan no-scrollbar"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`flex items-center justify-center h-full snap-start `}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;