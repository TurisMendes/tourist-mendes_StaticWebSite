import React, { ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode;
  className?: string;
  slideWidth?: string;
  gap?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  gap = '16px',
  slideWidth = '30',
}) => {
  return (
    <div className={`w-full overflow-hidden flex justify-between items-center px-auto`}>
      <div
        className="flex w-full lg:flex-wrap lg:justify-around overflow-x-auto snap-x snap-mandatory lg:snap-none touch-pan-x scrollbar-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          gap,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`flex items-center justify-center snap-center lg:snap-none`}
            style={{ width: `${slideWidth}%` }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;