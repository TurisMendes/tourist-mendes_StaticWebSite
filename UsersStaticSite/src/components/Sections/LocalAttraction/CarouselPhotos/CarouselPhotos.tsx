import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';


function CarouselMedia(): React.ReactNode {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const images = [
    { imageUrl: '/images/image1.png', altDescription: 'ALT description1' },
    { imageUrl: '/images/image2.jpg', altDescription: 'ALT description1' },
    { imageUrl: '/images/image3.jpg', altDescription: 'ALT description1' },
    { imageUrl: '/images/image4.jpg', altDescription: 'ALT description1' },
    { imageUrl: '/images/image5.jpg', altDescription: 'ALT description1' },
    { imageUrl: '/images/image1.png', altDescription: 'ALT description1' },
  ]
  const isLastImage = selectedImageIndex === images.length - 1;
  const isFirstImage = selectedImageIndex === 0;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);


  useEffect(() => {
    if (isModalOpen && thumbnailRefs.current[selectedImageIndex]) {
      thumbnailRefs.current[selectedImageIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [isModalOpen, selectedImageIndex]);

  return (
    <section className='w-full flex flex-col flex-grow items-start px-4 pr-0 py-8 md:px-0 md:mx-auto md:max-w-[770px] md:items-start md:justify-between lg:max-w-[944px] lg:px-0 lg:py-16 xl:py-0 xl:max-w-[540px]'>
      <h2 className='text-h2 mb-4'>Fotos</h2>
      <article
        className="flex w-full justify-between overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 md:flex-wrap md:snap-none">
        {images.map((image, index) => (
          <div
            tabIndex={0}
            className="relative w-[266px] h-[164px] flex-shrink-0 flex cursor-pointer md:flex-shrink md:max-w-[250px] md:w-[32%] md:h-auto lg:max-w-[300px] lg:w-[50%] xl:max-w-[171px] overflow-hidden rounded-xl"
            key={index}
            onClick={() => {
              setSelectedImageIndex(index);
              setIsModalOpen(true);
            }}
          >
            <img
              tabIndex={0}
              key={index}
              src={image.imageUrl}
              alt={image.altDescription}
              onClick={() => {
                setIsModalOpen(true)
                setSelectedImageIndex(index);
              }}
              className='w-full h-full object-cover rounded-xl cursor-pointer hover:scale-110 transition-all duration-250'
            />
          </div>
        ))}
      </article>

      {isModalOpen && (
        <section
          onClick={() => setIsModalOpen(false)}
          className='fixed inset-0 bg-black bg-opacity-90 flex flex-col gap-8 items-center justify-center z-40'>
          
          <article
            className='relative flex items-center justify-center w-full px-4 md:px-0 md:max-w-[770px] md:max-h-[472px] lg:max-w-[944px] xl:max-w-[1140px] xl:max-h-[600px]'>
            <img
              src={images[selectedImageIndex].imageUrl}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((currentIndex) => currentIndex + 1)
              }}
              disabled={isLastImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 hidden bg-white hover:bg-grey text-white rounded-full p-2 transition-colors disabled:bg-darkGrey disabled:hover:cursor-not-allowed md:flex xl:-right-16"
              aria-label="Próximo banner"
              tabIndex={-1}
            >
              <ChevronRight className="w-4 lg:w-8 h-4 lg:h-8 text-black" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((currentIndex) => currentIndex - 1)
              }}
              disabled={isFirstImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 hidden bg-white hover:bg-grey text-white rounded-full p-2 transition-colors disabled:bg-darkGrey disabled:hover:cursor-not-allowed md:flex xl:-left-16"
              aria-label="Banner anterior"
              tabIndex={-1}
            >
              <ChevronLeft className="w-4 lg:w-8 h-4 lg:h-8 text-black" />
            </button>
          </article>

          <div
            className='flex w-full h-[90px] items-center justify-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 pl-4 md:justify-center md:pl-0 md:max-w-[770px] lg:max-w-[944px] lg:h-[100px] xl:h-[120px] xl:max-w-[1140px]'>
            {images.map((image, index) => (
              <img
                ref={(el) => (thumbnailRefs.current[index] = el)}
                key={index}
                src={image.imageUrl}
                alt="ALT description"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(index);
                }}
                className={`w-[121px] h-[83px] flex-wrap object-cover rounded-md cursor-pointer active:border-2 active:border-white hover:scale-105 transition-all duration-250 lg:w-full lg:h-full
                  ${selectedImageIndex === index
                    ? "border-4 border-white"
                    : "border-4 border-transparent"}`}
              />
            ))}
          </div>
        </section>
      )}

    </section>
  );
}

export default CarouselMedia;
