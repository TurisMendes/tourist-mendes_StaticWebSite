import React, { ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode;
  className?: string;
  slideWidth?: string; // Width of each slide, defaults to 85%
  gap?: string; // Gap between slides, defaults to 16px
}

const Carousel: React.FC<CarouselProps> = ({ 
  children, 
  gap = '16px'
}) => {
  return (
    <div className={`w-full overflow-hidden lg:px-auto flex justify-center items-center`}>
      <div 
        className="flex lg:flex-wrap lg:justify-evenly overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-none"
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
            className="flex items-center justify-center w-full lg:w-[30%] snap-center lg:snap-none"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;