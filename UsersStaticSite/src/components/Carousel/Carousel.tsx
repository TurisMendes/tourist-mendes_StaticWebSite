import React, { ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  className = '',
}) => {
  return (
    <section className={`w-full overflow-hidden flex justify-start items-center`}>
      <div
        className={`flex w-full justify-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory lg:snap-none touch-pan no-scrollbar ${className}`}
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
    </section>
  );
};

export default Carousel;