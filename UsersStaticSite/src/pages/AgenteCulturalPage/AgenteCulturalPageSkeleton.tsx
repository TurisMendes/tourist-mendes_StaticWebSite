import { Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

export const AgenteCulturalPageSkeleton: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isWideScreen, setIsWideScreen] = useState<boolean>(window.innerWidth > 944);

  const skeletonColor = isDarkMode ? '#2c2c2c' : '#f0f0f0';
  const skeletonTextColor = isDarkMode ? '#3a3a3a' : '#d6d6d6';

  const appTextColor = isDarkMode ? '#fff' : '#000';

  console.log('is dark mode? ', isDarkMode);
  

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 944);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isWideScreen ? (
        <div className='AgenteCulturalPageSkeleton'>
          <div className="AgenteCulturalPageSkeleton__content">
            <div className="AgenteCulturalPageSkeleton__hero  relative h-[610px] md:h-[529px] lg:h-[532px]">

              <div className="hero__content w-full flex flex-col items-start justify-center">
                <div className="hero__coverImage w-full h-[400px]">
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="400px"
                    animation="wave"
                    className='AgenteCulturalPageSkeleton__coverImage w-full h-[400px] relative'
                    style={{ backgroundColor: skeletonColor }}
                  />
                </div>

                <div className="hero_breadcrumb w-full absolute top-0">
                  <div className="app-container">
                    <div className="breadcrumb">
                      <div className="breadcrumb__content flex items-center justify-start mt-4 w-full h-8 pl-[20px] md:pl-[4px]">
                        <Skeleton
                          variant="rounded"
                          width="20%"
                          height="100%"
                          animation="wave"
                          className='relative rounded-2xl'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="app-container relative h-[210px] md:h-[129px] flex justify-center">
                  <div className="hero__infos--wrapper w-full border-box absolute flex flex-col items-center justify-center bottom-0 left-0 md:flex-row md:left-[32px] xl:left-[4px]">
                    <div className="hero__profile-image-box min-w-[168px]">
                      <Skeleton
                        variant="rectangular"
                        width="168px"
                        height="168px"
                        animation="wave"
                        className='hero__profile-image rounded-full'
                        style={{ backgroundColor: skeletonTextColor }}
                      />
                    </div>

                    <div className="hero__datas-wrapper w-full flex flex-col items-center justify-center mt-[8px] md:mt-0 md:items-start md:mt-[28px] md:ml-[16px]">
                      <Skeleton
                        variant="rectangular"
                        width="220px"
                        height="40px"
                        animation="wave"
                        className='hero__title'
                        style={{ backgroundColor: skeletonTextColor }}
                      />

                      <Skeleton
                        variant="rectangular"
                        width="80px"
                        height="24px"
                        animation="wave"
                        className='hero__category mt-[8px]'
                        style={{ backgroundColor: skeletonTextColor }}
                      />
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <div className="AgenteCulturalPageSkeleton__body app-container">
              <div className="AgenteCulturalPageSkeleton__body-top-part flex flex-col lg:flex-row justify-between">
                <div className="AgenteCulturalPageSkeleton__body-top-part--leff lg:max-w-[700px]">
                  <div className="description">
                    <div className="description__content">
                      <div className="description__about-me mt-[50px] md:mt-[80px]">
                        <Skeleton
                          variant="rectangular"
                          width="200px"
                          height="34px"
                          animation="wave"
                          className='description__title mb-[16px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                        {/* <h2 className="Description__title font-bold text-[24px] leading-[1.4]  mb-[16px]">Sobre mim</h2> */}
                        <Skeleton
                          variant="rectangular"
                          width="100%"
                          height="100px"
                          animation="wave"
                          className='description__text mb-[16px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>
                      <div className="description__my-conttributions mt-[50px] md:mt-[80px]">
                        <Skeleton
                          variant="rectangular"
                          width="200px"
                          height="34px"
                          animation="wave"
                          className='description__title mb-[16px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />

                        <Skeleton
                          variant="rectangular"
                          width="100%"
                          height="100px"
                          animation="wave"
                          className='description__text mb-[16px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="AgenteCulturalPageSkeleton__body-top-part--right min-w-[30%] lg:max-w-[360px]">
                  <div className="areas-of-expertise">
                    <div className="areas-of-expertise__content">
                      <div className="areas-of-expertise__infos-wrapper mt-[50px] md:mt-[80px]">
                        <Skeleton
                          variant="rectangular"
                          width="200px"
                          height="34px"
                          animation="wave"
                          className='description__title mb-[16px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />

                        <div className="areas-of-expertise__tags-wrapper flex flex-wrap gap-[8px] mt-[16px]">
                          <Skeleton
                            variant="rectangular"
                            width="86PX"
                            height="34px"
                            animation="wave"
                            className='areas-of-expertise__tag pt-[4px] pb-[4px] px-[12px] border  border-[1px] rounded-[32px]'
                            style={{ backgroundColor: skeletonTextColor }}
                          />

                          <Skeleton
                            variant="rectangular"
                            width="115PX"
                            height="34px"
                            animation="wave"
                            className='areas-of-expertise__tag pt-[4px] pb-[4px] px-[12px] border  border-[1px] rounded-[32px]'
                            style={{ backgroundColor: skeletonTextColor }}
                          />

                          <Skeleton
                            variant="rectangular"
                            width="105PX"
                            height="34px"
                            animation="wave"
                            className='areas-of-expertise__tag pt-[4px] pb-[4px] px-[12px] border  border-[1px] rounded-[32px]'
                            style={{ backgroundColor: skeletonTextColor }}
                          />
                        </div>

                      </div>
                    </div>
                  </div>


                  <div className="carousel-photos">
                    <div className="carousel-photos__content  mt-[50px] md:mt-[80px] w-full flex flex-col flex-grow items-start pr-0 md:px-0  md:items-start md:justify-between">
                      <Skeleton
                        variant="rectangular"
                        width="64px"
                        height="34px"
                        animation="wave"
                        className='carousel-photos__title mb-[16px]'
                        style={{ backgroundColor: skeletonTextColor }}
                      />

                      <div className="carousel-photos__items flex w-full justify-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 md:flex-wrap md:snap-none">
                        <div className="carousel-photos__item relative w-[171.33px] h-[126px] flex-shrink-0 flex cursor-pointer md:flex-shrink overflow-hidden rounded-xl">
                          <Skeleton
                            variant="rectangular"
                            width="171.33px"
                            height="126px"
                            animation="wave"
                            className='carousel-photos__item-image w-full h-full object-cover rounded-xl'
                            style={{ backgroundColor: skeletonTextColor }}
                          />
                        </div>

                        <div className="carousel-photos__item relative w-[171.33px] h-[126px] flex-shrink-0 flex cursor-pointer md:flex-shrink overflow-hidden rounded-xl">
                          <Skeleton
                            variant="rectangular"
                            width="171.33px"
                            height="126px"
                            animation="wave"
                            className='carousel-photos__item-image w-full h-full object-cover rounded-xl'
                            style={{ backgroundColor: skeletonTextColor }}
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="carousel-videos">
                    <div className="carousel-videos__content  mt-[50px] md:mt-[80px] w-full flex flex-col flex-grow items-start pr-0 md:px-0  md:items-start md:justify-between">
                      <Skeleton
                        variant="rectangular"
                        width="80px"
                        height="34px"
                        animation="wave"
                        className='carousel-videos__title mb-[16px]'
                        style={{ backgroundColor: skeletonTextColor }}
                      />

                      <div className="carousel-videos__items flex w-full justify-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 md:flex-wrap md:snap-none">
                        <div className="carousel-videos__item relative w-[171.33px] h-[126px] flex-shrink-0 flex cursor-pointer md:flex-shrink overflow-hidden rounded-xl">
                          <Skeleton
                            variant="rectangular"
                            width="171.33px"
                            height="126px"
                            animation="wave"
                            className='carousel-videos__item-image w-full h-full object-cover rounded-xl'
                            style={{ backgroundColor: skeletonTextColor }}
                          />
                        </div>

                        <div className="carousel-videos__item relative w-[171.33px] h-[126px] flex-shrink-0 flex cursor-pointer md:flex-shrink overflow-hidden rounded-xl">
                          <Skeleton
                            variant="rectangular"
                            width="171.33px"
                            height="126px"
                            animation="wave"
                            className='carousel-videos__item-image w-full h-full object-cover rounded-xl'
                            style={{ backgroundColor: skeletonTextColor }}
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>

              <div className="AgenteCulturalPageSkeleton__body-bottom-part lg:max-w-[700px]">
                <div className="loadmap w-full">
                  <div className="loadmap__content mt-[50px] md:mt-[80px] flex flex-col items-start w-full">
                    <Skeleton
                      variant="rectangular"
                      width="110px"
                      height="34px"
                      animation="wave"
                      className='loadmap__title mb-[16px]'
                      style={{ backgroundColor: skeletonTextColor }}
                    />

                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="327px"
                      animation="wave"
                      className='loadmap__map rounded-2xl'
                      style={{ backgroundColor: skeletonTextColor }}
                    />
                  </div>
                </div>

                <div className="contact">
                  <div className="contact__content mt-[50px] md:mt-[80px] md:pl-0">
                    <Skeleton
                      variant="rectangular"
                      width="110px"
                      height="34px"
                      animation="wave"
                      className='contact__title mb-[16px]'
                      style={{ backgroundColor: skeletonTextColor }}
                    />

                    <div className="contact__items flex flex-col gap-2">
                      <div className="contect__phone-numbers flex flex-col">
                        <Skeleton
                          variant="rectangular"
                          width="230px"
                          height="30px"
                          animation="wave"
                          className='contact__title mb-[16px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>

                      <div className="contect__emails flex flex-col">
                        <Skeleton
                          variant="rectangular"
                          width="150px"
                          height="30px"
                          animation="wave"
                          className='contact__title mb-[16px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>


                      <div className="contect__site flex flex-col">
                        <Skeleton
                          variant="rectangular"
                          width="180px"
                          height="30px"
                          animation="wave"
                          className='contact__title mb-[16px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>


                      <div className="contect__address flex flex-col">
                        <Skeleton
                          variant="rectangular"
                          width="268px"
                          height="30px"
                          animation="wave"
                          className='contact__title mb-[16px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>

                      <div className="contact__social-medias flex gap-2">
                        <Skeleton
                          variant="rectangular"
                          width="32px"
                          height="32px"
                          animation="wave"
                          className='contact__media-1 mb-[16px] rounded-full'
                          style={{ backgroundColor: skeletonTextColor }}
                        />

                        <Skeleton
                          variant="rectangular"
                          width="32px"
                          height="32px"
                          animation="wave"
                          className='contact__media-1 mb-[16px] rounded-full'
                          style={{ backgroundColor: skeletonTextColor }}
                        />

                        <Skeleton
                          variant="rectangular"
                          width="32px"
                          height="32px"
                          animation="wave"
                          className='contact__media-1 mb-[16px] rounded-full'
                          style={{ backgroundColor: skeletonTextColor }}
                        />

                        <Skeleton
                          variant="rectangular"
                          width="32px"
                          height="32px"
                          animation="wave"
                          className='contact__media-1 mb-[16px] rounded-full'
                          style={{ backgroundColor: skeletonTextColor }}
                        />

                        <Skeleton
                          variant="rectangular"
                          width="32px"
                          height="32px"
                          animation="wave"
                          className='contact__media-1 mb-[16px] rounded-full'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='AgenteCulturalPageSkeleton'>
          <div className="AgenteCulturalPageSkeleton__content">
            <div className="AgenteCulturalPageSkeleton__hero  relative h-[610px] md:h-[529px] lg:h-[532px]">

              <div className="hero__content w-full flex flex-col items-start justify-center">
                <div className="hero__coverImage w-full h-[400px]">
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="400px"
                    animation="wave"
                    className='AgenteCulturalPageSkeleton__coverImage w-full h-[400px] relative'
                    style={{ backgroundColor: skeletonTextColor }}
                  />
                </div>

                <div className="hero_breadcrumb w-full absolute top-0">
                  <div className="app-container">
                    <div className="breadcrumb">
                      <div className="breadcrumb__content flex items-center justify-start mt-4 w-full h-8 pl-[20px] md:pl-[4px]">
                        <Skeleton
                          variant="rounded"
                          width="20%"
                          height="100%"
                          animation="wave"
                          className='relative rounded-2xl'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="app-container relative h-[210px] md:h-[129px] flex justify-center">
                  <div className="hero__infos--wrapper w-full border-box absolute flex flex-col items-center justify-center bottom-0 left-0 md:flex-row md:left-[32px] md:w-[calc(100%-32px)] xl:left-[4px] xl:w-[calc(100%-4px)]">
                    <div className="hero__profile-image-box min-w-[168px]">
                      <Skeleton
                        variant="rectangular"
                        width="168px"
                        height="168px"
                        animation="wave"
                        className='hero__profile-image rounded-full'
                        style={{ backgroundColor: skeletonTextColor }}
                      />
                    </div>
                    <div className="hero__datas-wrapper w-[84%] flex flex-col items-center justify-center md:items-start md:mt-[28px] md:ml-[16px]">
                      <Skeleton
                        variant="rectangular"
                        width="220px"
                        height="40px"
                        animation="wave"
                        className='hero__title'
                        style={{ backgroundColor: skeletonTextColor }}
                      />

                      <Skeleton
                        variant="rectangular"
                        width="80px"
                        height="24px"
                        animation="wave"
                        className='hero__category mt-[8px]'
                        style={{ backgroundColor: skeletonTextColor }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="AgenteCulturalPageSkeleton__body app-container flex gap-[80px]">
              <div className="AgenteCulturalPageSkeleton__body-top-part left-part flex flex-col justify-between lg:max-w-[700px] lg:min-w-[60%]">

                <div className="AgenteCulturalPageSkeleton__body-top-part--left w-full">
                  <div className="description">
                    <div className="description__content">
                      <div className="description__about-me mt-[50px] md:mt-[80px]">
                        <Skeleton
                          variant="rectangular"
                          width="200px"
                          height="34px"
                          animation="wave"
                          className='description__title mb-[16px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />

                        {/* <h2 className={`Description__title font-bold text-[${appTextColor}] text-[24px] leading-[1.4] mb-[16px]`}>Sobre mim</h2> */}

                        <Skeleton
                          variant="rectangular"
                          width="100%"
                          height="100px"
                          animation="wave"
                          className='description__text mb-[16px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>
                      <div className="description__my-conttributions mt-[50px] md:mt-[80px]">
                        {/* <Skeleton
                          variant="rectangular"
                          width="200px"
                          height="34px"
                          animation="wave"
                          className='description__title mb-[16px]'
                          style={{ backgroundColor: textColor }}
                        /> */}


                        <h3 className="Description__title font-bold text-[24px] leading-[1.4] mb-[16px]">Minhas Contribuições</h3>

                        <Skeleton
                          variant="rectangular"
                          width="100%"
                          height="100px"
                          animation="wave"
                          className='description__text mb-[16px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>
                    </div>
                  </div>
                </div>



                <div className="AgenteCulturalPageSkeleton__body-bottom-part--right right-part lg:max-w-[700px]">
                  <div className="loadmap w-full">
                    <div className="loadmap__content mt-[50px] md:mt-[80px] flex flex-col items-start w-full">
                      <Skeleton
                        variant="rectangular"
                        width="110px"
                        height="34px"
                        animation="wave"
                        className='loadmap__title mb-[16px]'
                        style={{ backgroundColor: skeletonTextColor }}
                      />

                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height="327px"
                        animation="wave"
                        className='loadmap__map rounded-2xl'
                        style={{ backgroundColor: skeletonTextColor }}
                      />
                    </div>
                  </div>

                  <div className="contact">
                    <div className="contact__content mt-[50px] md:mt-[80px] md:pl-0">
                      <Skeleton
                        variant="rectangular"
                        width="110px"
                        height="34px"
                        animation="wave"
                        className='contact__title mb-[16px]'
                        style={{ backgroundColor: skeletonTextColor }}
                      />

                      <div className="contact__items flex flex-col gap-2">
                        <div className="contect__phone-numbers flex flex-col">
                          <Skeleton
                            variant="rectangular"
                            width="230px"
                            height="30px"
                            animation="wave"
                            className='contact__title mb-[16px]'
                            style={{ backgroundColor: skeletonTextColor }}
                          />
                        </div>

                        <div className="contect__emails flex flex-col">
                          <Skeleton
                            variant="rectangular"
                            width="150px"
                            height="30px"
                            animation="wave"
                            className='contact__title mb-[16px]'
                            style={{ backgroundColor: skeletonTextColor }}
                          />
                        </div>


                        <div className="contect__site flex flex-col">
                          <Skeleton
                            variant="rectangular"
                            width="180px"
                            height="30px"
                            animation="wave"
                            className='contact__title mb-[16px]'
                            style={{ backgroundColor: skeletonTextColor }}
                          />
                        </div>


                        <div className="contect__address flex flex-col">
                          <Skeleton
                            variant="rectangular"
                            width="400px"
                            height="30px"
                            animation="wave"
                            className='contact__title mb-[16px]'
                            style={{ backgroundColor: skeletonTextColor }}
                          />
                        </div>

                        <div className="contact__social-medias flex gap-2">
                          <Skeleton
                            variant="rectangular"
                            width="32px"
                            height="32px"
                            animation="wave"
                            className='contact__media-1 mb-[16px] rounded-full'
                            style={{ backgroundColor: skeletonTextColor }}
                          />

                          <Skeleton
                            variant="rectangular"
                            width="32px"
                            height="32px"
                            animation="wave"
                            className='contact__media-1 mb-[16px] rounded-full'
                            style={{ backgroundColor: skeletonTextColor }}
                          />

                          <Skeleton
                            variant="rectangular"
                            width="32px"
                            height="32px"
                            animation="wave"
                            className='contact__media-1 mb-[16px] rounded-full'
                            style={{ backgroundColor: skeletonTextColor }}
                          />

                          <Skeleton
                            variant="rectangular"
                            width="32px"
                            height="32px"
                            animation="wave"
                            className='contact__media-1 mb-[16px] rounded-full'
                            style={{ backgroundColor: skeletonTextColor }}
                          />

                          <Skeleton
                            variant="rectangular"
                            width="32px"
                            height="32px"
                            animation="wave"
                            className='contact__media-1 mb-[16px] rounded-full'
                            style={{ backgroundColor: skeletonTextColor }}
                          />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="AgenteCulturalPageSkeleton__body-top-part--right lg:max-w-[360px]">
                <div className="areas-of-expertise">
                  <div className="areas-of-expertise__content">
                    <div className="areas-of-expertise__infos-wrapper mt-[50px] md:mt-[80px]">
                      <Skeleton
                        variant="rectangular"
                        width="200px"
                        height="34px"
                        animation="wave"
                        className='description__title mb-[16px]'
                        style={{ backgroundColor: skeletonTextColor }}
                      />

                      <div className="areas-of-expertise__tags-wrapper flex flex-wrap gap-[8px] mt-[16px]">
                        <Skeleton
                          variant="rectangular"
                          width="86PX"
                          height="34px"
                          animation="wave"
                          className='areas-of-expertise__tag pt-[4px] pb-[4px] px-[12px] border  border-[1px] rounded-[32px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />

                        <Skeleton
                          variant="rectangular"
                          width="115PX"
                          height="34px"
                          animation="wave"
                          className='areas-of-expertise__tag pt-[4px] pb-[4px] px-[12px] border  border-[1px] rounded-[32px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />

                        <Skeleton
                          variant="rectangular"
                          width="105PX"
                          height="34px"
                          animation="wave"
                          className='areas-of-expertise__tag pt-[4px] pb-[4px] px-[12px] border  border-[1px] rounded-[32px]'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>

                    </div>
                  </div>
                </div>


                <div className="carousel-photos">
                  <div className="carousel-photos__content  mt-[50px] md:mt-[80px] w-full flex flex-col flex-grow items-start pr-0 md:px-0  md:items-start md:justify-between">
                    <Skeleton
                      variant="rectangular"
                      width="64px"
                      height="34px"
                      animation="wave"
                      className='carousel-photos__title mb-[16px]'
                      style={{ backgroundColor: skeletonTextColor }}
                    />

                    <div className="carousel-photos__items flex w-full justify-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 md:flex-wrap md:snap-none">
                      <div className="carousel-photos__item relative w-[171.33px] h-[126px] flex-shrink-0 flex cursor-pointer md:flex-shrink overflow-hidden rounded-xl">
                        <Skeleton
                          variant="rectangular"
                          width="171.33px"
                          height="126px"
                          animation="wave"
                          className='carousel-photos__item-image w-full h-full object-cover rounded-xl'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>

                      <div className="carousel-photos__item relative w-[171.33px] h-[126px] flex-shrink-0 flex cursor-pointer md:flex-shrink overflow-hidden rounded-xl">
                        <Skeleton
                          variant="rectangular"
                          width="171.33px"
                          height="126px"
                          animation="wave"
                          className='carousel-photos__item-image w-full h-full object-cover rounded-xl'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>
                    </div>

                  </div>
                </div>

                <div className="carousel-videos">
                  <div className="carousel-videos__content  mt-[50px] md:mt-[80px] w-full flex flex-col flex-grow items-start pr-0 md:px-0  md:items-start md:justify-between">
                    <Skeleton
                      variant="rectangular"
                      width="80px"
                      height="34px"
                      animation="wave"
                      className='carousel-videos__title mb-[16px]'
                      style={{ backgroundColor: skeletonTextColor }}
                    />

                    <div className="carousel-videos__items flex w-full justify-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 md:flex-wrap md:snap-none">
                      <div className="carousel-videos__item relative w-[171.33px] h-[126px] flex-shrink-0 flex cursor-pointer md:flex-shrink overflow-hidden rounded-xl">
                        <Skeleton
                          variant="rectangular"
                          width="171.33px"
                          height="126px"
                          animation="wave"
                          className='carousel-videos__item-image w-full h-full object-cover rounded-xl'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>

                      <div className="carousel-videos__item relative w-[171.33px] h-[126px] flex-shrink-0 flex cursor-pointer md:flex-shrink overflow-hidden rounded-xl">
                        <Skeleton
                          variant="rectangular"
                          width="171.33px"
                          height="126px"
                          animation="wave"
                          className='carousel-videos__item-image w-full h-full object-cover rounded-xl'
                          style={{ backgroundColor: skeletonTextColor }}
                        />
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AgenteCulturalPageSkeleton;