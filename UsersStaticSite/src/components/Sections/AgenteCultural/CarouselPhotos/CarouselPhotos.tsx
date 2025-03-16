import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselSkeleton from "./CarouselSkeleton";
import { CircularProgress } from "@mui/material";
import { ImageData } from "../../../../shared-lib/typesHomePage";

interface Props {
  photos: ImageData[];
  isLoading?: boolean;
}

function CarouselPhotos({ photos, isLoading }: Props): React.ReactNode {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalImageLoading, setIsModalImageLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isLastImage = photos ? selectedImageIndex === photos.length - 1 : false;
  const isFirstImage = selectedImageIndex === 0;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen && thumbnailRefs.current[selectedImageIndex]) {
      thumbnailRefs.current[selectedImageIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [isModalOpen, selectedImageIndex]);

  return (
    <div className="CarouselPhotos">
      <section className=" CarouselPhotos__content mt-[50px] md:mt-[80px] w-full flex flex-col flex-grow items-start pr-0 md:px-0  md:items-start md:justify-between">
        {isLoading ? (
          <CarouselSkeleton />
        ) : (
          <>
            <h2 className="CarouselPhotos__title text-h2 mb-4 font-bold text-[24px] leading-[1.4] mb-[16px]">Fotos</h2>
            <article className="CarouselPhotos__items flex w-full justify-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 md:flex-wrap md:snap-none">
              {photos?.map((image, index) => (
                <div
                  tabIndex={0}
                  className="CarouselPhotos__item relative w-[171.33px] h-[126px] flex-shrink-0 flex cursor-pointer md:flex-shrink overflow-hidden rounded-xl"
                  key={index}
                  onClick={() => {
                    setSelectedImageIndex(index);
                    setIsModalImageLoading(true);
                    setIsModalOpen(true);
                  }}
                >
                  <img
                    tabIndex={0}
                    key={index}
                    src={image.imageUrl}
                    alt={image.altDescription}
                    className="CarouselPhotos__item-image w-full h-full object-cover rounded-xl cursor-pointer hover:scale-110 transition-all duration-250"
                  />
                </div>
              ))}
            </article>
          </>
        )}

        {isModalOpen && (
          <div className="app-container">
            <section
              onClick={() => setIsModalOpen(false)}
              className="CarouselPhotos__modal fixed inset-0 bg-black bg-opacity-90 flex flex-col gap-8 items-center justify-center z-40 "
            >
              <article className="relative flex items-center justify-center w-full h-[220px] md:max-w-[754px] md:h-[472px] lg:max-w-[1140px]">
                {isModalImageLoading && (
                  <div className="absolute flex items-center justify-center w-full h-full">
                    <CircularProgress sx={{ color: "#fff" }} size={100} />
                  </div>
                )}
                <img
                  src={photos && photos[selectedImageIndex].imageUrl}
                  alt={photos && photos[selectedImageIndex].altDescription}
                  onLoad={() => setIsModalImageLoading(false)}
                  className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${isModalImageLoading ? "opacity-0" : "opacity-100"
                    }`}
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isLastImage && photos) {
                      setIsModalImageLoading(true);
                      const nextImg = new Image();
                      nextImg.src = photos[selectedImageIndex + 1].imageUrl;
                      nextImg.onload = () => {
                        setSelectedImageIndex((currentIndex) => currentIndex + 1);
                      };
                    }
                  }}
                  disabled={isLastImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex bg-white hover:bg-grey text-white rounded-full p-2 transition-colors disabled:bg-darkGrey disabled:hover:cursor-not-allowed xl:-right-16"
                  aria-label="Próximo banner"
                  tabIndex={-1}
                >
                  <ChevronRight className="w-6 lg:w-8 h-6 lg:h-8 text-black" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isFirstImage && photos) {
                      setIsModalImageLoading(true);
                      const prevImg = new Image();
                      prevImg.src = photos[selectedImageIndex - 1].imageUrl;
                      prevImg.onload = () => {
                        setSelectedImageIndex((currentIndex) => currentIndex - 1);
                      };
                    }
                  }}
                  disabled={isFirstImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex bg-white hover:bg-grey text-white rounded-full p-2 transition-colors disabled:bg-darkGrey disabled:hover:cursor-not-allowed xl:-left-16"
                  aria-label="Banner anterior"
                  tabIndex={-1}
                >
                  <ChevronLeft className="w-6 lg:w-8 h-6 lg:h-8 text-black" />
                </button>

              </article>

              <div className="flex justify-center w-full h-[90px] overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 pl-4 md:justify-center md:pl-0 lg:overflow-hidden">
                {photos?.map((image, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 lg:w-[150px] lg:overflow-hidden ${selectedImageIndex === index
                      ? "border-4 border-white rounded-md"
                      : "border-4 border-transparent"
                      }`}
                  >
                    <img
                      ref={(el) => (thumbnailRefs.current[index] = el)}
                      src={image.imageUrl}
                      alt={image.altDescription}
                      onLoad={() => setIsModalImageLoading(false)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex(index);
                        setIsModalImageLoading(true);
                      }}
                      className="w-[121px] h-[83px] object-cover rounded-md cursor-pointer hover:scale-110 transition-all duration-250 lg:w-full lg:h-full"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </section>
    </div>
  );
}

export default CarouselPhotos;
