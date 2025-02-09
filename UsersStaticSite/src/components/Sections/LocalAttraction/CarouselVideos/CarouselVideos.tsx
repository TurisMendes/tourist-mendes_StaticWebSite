import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { VideoData } from "../../../../shared-lib/typesHomePage";
import CarouselSkeleton from "../CarouselPhotos/CarouselSkeleton";

interface Props {
  videos: VideoData[] | undefined;
  isLoading?: boolean;
}

function CarouselVideos({ videos, isLoading }: Props): React.ReactNode {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const isLastVideo = videos ? selectedVideoIndex === videos.length - 1 : false;
  const isFirstVideo = selectedVideoIndex === 0;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isModalOpen && thumbnailRefs.current[selectedVideoIndex]) {
      thumbnailRefs.current[selectedVideoIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [isModalOpen, selectedVideoIndex]);

  function getYouTubeVideoIdFromDTO(videos: VideoData[]): (string | null)[] {
    return videos.map((video) => {
      try {
        const url = new URL(video.videoUrl);
        if (url.hostname === "youtu.be") {
          return url.pathname.slice(1);
        }
        return url.searchParams.get("v") || url.searchParams.get("si");
      } catch (e) {
        console.error("Invalid URL", e);
        return null;
      }
    });
  }

  const videoIds = videos ? getYouTubeVideoIdFromDTO(videos) : [];

  return (
    <section className="w-full flex flex-col flex-grow items-start px-4 pr-0 md:px-0 md:max-w-[770px] md:justify-between lg:max-w-[944px] lg:px-0 lg:py-16 xl:py-0 xl:max-w-[540px]">
      {isLoading ? (
        <CarouselSkeleton />
      ) : (
        <>
          <h2 className="text-h2 mb-4">Vídeos</h2>
          <article className="flex w-full justify-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 md:flex-wrap md:snap-none lg:gap-3">
            {videoIds?.map((videoId, index) => (
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
                  src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                  alt=""
                  className="w-full h-full object-cover rounded-xl cursor-pointer group-hover:scale-110 transition-all duration-250"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-offwhite active:bg-grey">
                    <Play className="w-8 h-8 fill-black" />
                  </div>
                </div>
              </div>
            ))}
          </article>
        </>
      )}

      {isModalOpen && (
        <section
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-95 px-2 flex flex-col gap-8 items-center justify-center z-40"
        >
          <article className="relative flex items-center justify-center w-full h-[220px] md:px-auto md:max-w-[770px] md:h-[472px] lg:max-w-[944px] xl:max-w-[1140px] xl:h-[680px]">
            <iframe
              title="Vídeo de interesse"
              className="w-full h-full object-cover rounded-lg"
              src={`https://www.youtube.com/embed/${videoIds[selectedVideoIndex]}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideoIndex((currentIndex) => currentIndex + 1);
              }}
              disabled={isLastVideo}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-grey text-white rounded-full p-2 transition-colors disabled:bg-darkGrey disabled:hover:cursor-not-allowed xl:-right-20"
              aria-label="Próximo banner"
              tabIndex={-1}
            >
              <ChevronRight className="w-8 lg:w-10 h-8 lg:h-10 text-black" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideoIndex((currentIndex) => currentIndex - 1);
              }}
              disabled={isFirstVideo}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-grey text-white rounded-full p-2 transition-colors disabled:bg-darkGrey disabled:hover:cursor-not-allowed xl:-left-20"
              aria-label="Banner anterior"
              tabIndex={-1}
            >
              <ChevronLeft className="w-8 lg:w-10 h-8 lg:h-10 text-black" />
            </button>
          </article>

          <div className="flex w-full h-[90px] items-center justify-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 pl-4 md:justify-center md:pl-0 md:max-w-[770px] lg:max-w-[944px] lg:h-[120px] xl:max-w-[1140px] xl:h-[140px]">
            {videoIds?.map((videoId, index) => (
              <div
                key={index}
                className={`w-[121px] h-[83px] lg:w-[200px] lg:h-[120px] overflow-hidden ${
                  selectedVideoIndex === index
                    ? "border-4 border-white"
                    : "border-4 border-transparent"
                }`}
              >
                <img
                  ref={(el) => (thumbnailRefs.current[index] = el)}
                  src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                  alt="ALT description"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVideoIndex(index);
                  }}
                  className={`w-full h-full object-cover rounded-md cursor-pointer transform-gpu hover:scale-110 transition-all duration-250
        `}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

export default CarouselVideos;
