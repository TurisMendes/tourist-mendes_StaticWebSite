import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HomeBanner } from '../../shared-lib/typesHomePage';

interface BannerCarouselProps {
  banners: HomeBanner[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        const nextIndex = (currentIndex + 1) % banners.length;
        scrollToIndex(nextIndex);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, currentIndex, banners.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setCurrentIndex(index);
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.5,
        rootMargin: '0px',
      }
    );

    const slides = scrollContainerRef.current?.querySelectorAll('.slide');
    slides?.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index: number): void => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const slideWidth = container.offsetWidth;
    container.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchEnd={() => setIsAutoPlaying(true)}
    >
      <div
        ref={scrollContainerRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory touch-pan scrollbar-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            data-index={index}
            className="w-full flex-shrink-0 snap-start"
          >
            <a
              href={banner.linkUrl}
              className="flex relative w-full h-full"
            >
              <img
                src={banner.imageData.imageUrl}
                alt={banner.imageData.altDescription}
                className="w-full h-[516px] lg:h-[800px] object-cover"
              />
              {banner.description && (
                <div className="absolute bottom-24 left-0 right-0 p-4 w-fit">
                  <h1 className='text-h1 text-white w-full'>
                    {banner.description}
                  </h1>
                </div>
              )}
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollToIndex((currentIndex - 1 + banners.length) % banners.length)}
        className="absolute hidden md:flex left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-grey text-white rounded-full p-2 transition-colors"
        aria-label="Banner anterior"
      >
        <ChevronLeft className="w-6 lg:w-10 h-6 lg:h-10 text-black" />
      </button>
      <button
        onClick={() => scrollToIndex((currentIndex + 1) % banners.length)}
        className="absolute hidden md:flex right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-grey text-white rounded-full p-2 transition-colors"
        aria-label="Próximo banner"
      >
        <ChevronRight className="w-6 lg:w-10 h-6 lg:h-10 text-black" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'scale-125 bg-primary dark:bg-seconary' : 'scale-75 bg-white'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerCarousel;