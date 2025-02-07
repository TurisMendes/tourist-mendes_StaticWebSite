import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { ImageData } from '../../../../shared-lib/typesHomePage';

interface Props {
  photos: ImageData[] | undefined;
}

function CarouselPhotos({ photos }: Props): React.ReactNode {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isLastImage = photos ? selectedImageIndex === photos.length - 1 : false;
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
    <section className='w-full flex flex-col flex-grow items-start px-4 pr-0 md:px-0 md:mx-auto md:max-w-[770px] md:items-start md:justify-between lg:min-w-[944px] lg:max-w-[944px] lg:px-0 lg:py-16 xl:mx-0 xl:py-0 xl:min-w-[530px] xl:max-w-[540px]'>
      <h2 className='text-h2 mb-4'>Fotos</h2>
      <article
        className="flex w-full justify-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 md:flex-wrap md:snap-none">
        {photos?.map((image, index) => (
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
            className='relative flex items-center justify-center w-full px-4 md:px-0 md:max-w-[770px] md:max-h-[472px] lg:max-w-[944px] xl:max-w-[1140px] xl:max-h-[680px]'>
            <img
              src={photos && photos[selectedImageIndex].imageUrl}
              alt={photos && photos[selectedImageIndex].altDescription}
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
              <ChevronRight className="w-6 lg:w-8 h-6 lg:h-8 text-black" />
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
              <ChevronLeft className="w-6 lg:w-8 h-6 lg:h-8 text-black" />
            </button>
          </article>

          <div className='flex w-full h-[90px] items-center justify-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 pl-4 md:justify-center md:pl-0 md:max-w-[770px] lg:overflow-hidden lg:max-w-[944px] lg:h-[100px] xl:h-[120px] xl:max-w-[1140px]'>
            {photos?.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 lg:w-[150px] lg:overflow-hidden ${selectedImageIndex === index ? "border-4 border-white" : "border-4 border-transparent"}`}
              >
                <img
                  ref={(el) => (thumbnailRefs.current[index] = el)}
                  src={image.imageUrl}
                  alt={image.altDescription}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(index);
                  }}
                  className='w-[121px] h-[83px] object-cover rounded-md cursor-pointer hover:scale-110 transition-all duration-250 lg:w-full lg:h-full'
                />
              </div>
            ))}
          </div>
        </section>
      )}

    </section>
  );
}

export default CarouselPhotos;
