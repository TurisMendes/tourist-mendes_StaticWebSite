import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

function CarouselVideos(): React.ReactNode {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const videos = [
    { videoId: 'DArqlvETSjs', },
    { videoId: 'w5v5SyI4THE', },
    { videoId: '8VGZG_g254M', },
    { videoId: 'idh5l2Rq6hM', },
  ]

  const isLastVideo = selectedVideoIndex === videos.length - 1;
  const isFirstVideo = selectedVideoIndex === 0;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isModalOpen && thumbnailRefs.current[selectedVideoIndex]) {
      thumbnailRefs.current[selectedVideoIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [isModalOpen, selectedVideoIndex]);

  return (
    <section className='w-full flex flex-col flex-grow items-start px-4 pr-0 py-8 md:px-0 md:max-w-[770px] md:items-start md:justify-between lg:max-w-[944px] lg:px-0 lg:py-16 xl:py-0 xl:max-w-[540px]'>
      <h2 className='text-h2 mb-4'>Vídeos</h2>
      <article
        className="flex w-full justify-between overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 md:flex-wrap md:snap-none lg:gap-3">
        {videos.map((video, index) => (
          <div
            tabIndex={0}
            className="group relative w-[266px] h-[164px] flex-shrink-0 flex cursor-pointer md:flex-shrink md:max-w-[250px] md:w-[32%] md:h-auto lg:max-w-[300px] lg:w-[50%] lg:h-[200px] xl:max-w-[171px] xl:h-[126px] overflow-hidden rounded-xl"
            key={index}
            onClick={() => {
              setSelectedVideoIndex(index);
              setIsModalOpen(true);
            }}
          >
            <img
              src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
              alt=""
              className='w-full h-full object-cover rounded-xl cursor-pointer group-hover:scale-110 transition-all duration-250'
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-offwhite active:bg-grey">
                <Play className="w-8 h-8 fill-black" />
              </div>
            </div>
          </div>
        ))}
      </article>


      {isModalOpen && (
        <section
          onClick={() => setIsModalOpen(false)}
          className='fixed inset-0 bg-black bg-opacity-95 p-2 flex flex-col gap-8 items-center justify-center z-40'>

          <article
            className='relative flex items-center justify-center w-full px-4 md:px-0 md:max-w-[770px] md:h-[472px] lg:max-w-[944px] xl:max-w-[1140px] xl:h-[600px]'>
            <iframe
              className='w-full h-full object-cover rounded-lg'
              src={`https://www.youtube.com/embed/${videos[selectedVideoIndex].videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideoIndex((currentIndex) => currentIndex + 1)
              }}
              disabled={isLastVideo}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-grey text-white rounded-full p-2 transition-colors disabled:bg-darkGrey disabled:hover:cursor-not-allowed xl:-right-16"
              aria-label="Próximo banner"
              tabIndex={-1}
            >
              <ChevronRight className="w-4 lg:w-10 h-4 lg:h-10 text-black" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideoIndex((currentIndex) => currentIndex - 1)
              }}
              disabled={isFirstVideo}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-grey text-white rounded-full p-2 transition-colors disabled:bg-darkGrey disabled:hover:cursor-not-allowed xl:-left-16"
              aria-label="Banner anterior"
              tabIndex={-1}
            >
              <ChevronLeft className="w-4 lg:w-10 h-4 lg:h-10 text-black" />
            </button>
          </article>

          <div
            className='flex w-full h-[90px] items-center justify-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 pl-4 md:justify-center md:pl-0 md:max-w-[770px] lg:max-w-[944px] lg:h-[120px] xl:max-w-[1140px] xl:h-[140px]'>
            {videos.map((video, index) => (
              <img
                ref={(el) => (thumbnailRefs.current[index] = el)}
                key={index}
                src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                alt="ALT description"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVideoIndex(index);
                }}
                className={`w-[121px] h-[83px] flex-wrap object-cover rounded-md cursor-pointer active:border-2 active:border-white hover:scale-105 transition-all duration-250 lg:w-full lg:h-full
                  ${selectedVideoIndex === index
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

export default CarouselVideos;
