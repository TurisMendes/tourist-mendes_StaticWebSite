import React from 'react';
import Carousel from '../../../Carousel/Carousel.tsx';
import ButtonCustom from '../../../ButtonCustom/ButtonCustom.tsx';
import { useQuery } from '@tanstack/react-query';
import TrailSkeleton from '../../../Skeletons/TrailSkeleton.tsx';
import TrailCard from '../../../Cards/TrailCard/TrailCard.tsx';
import { FetchError } from '../../../Errors/FetchError.tsx';
import { ResponseDTO, TrilhasHomeCard } from '../../../../shared-lib/typesHomePage.ts';
import { getTrails } from '../../../../api/trails/getTrails.ts';

function TrailsSection(): React.ReactNode {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  const { data: responseTrilhasDTO, isLoading, isError, refetch } = useQuery<ResponseDTO<TrilhasHomeCard[]>>({
    queryKey: ['trails'],
    queryFn: getTrails,
  });

  return (
    <section className="bg-white dark:bg-lightGrey w-full">
      <div className="lg:max-w-[944px] xl:max-w-[1160px] lg:mx-auto py-12 md:py-20 flex flex-col items-start home-content-container">
        <h1 className='text-h1 text-black dark:text-white text-center mb-8'>TRILHAS</h1>

        {isError && (
          <FetchError action={refetch} content='trilhas' />
        )}

        <div ref={sectionRef} className="w-full">
          <Carousel className='flex-shrink-0 lg:justify-evenly'>
            {isLoading
              ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex-shrink-0">
                    <TrailSkeleton />
                  </div>
                ))
              : responseTrilhasDTO?.data?.map((trails, index) => (
                <div key={index} className="h-[440px]">
                  <TrailCard
                    imageData={trails.imageData}
                    linkUrl={trails.linkUrl}
                    title={trails.title}
                    shortDescription={trails.shortDescription}
                    level={trails.level}
                  />
                </div>
              ))}
          </Carousel>
        </div>
        <div className={`${isLoading || isError ? 'hidden' : 'flex'} justify-center mt-2`}>
          <ButtonCustom variant='primary' text='Exibir mais' content='Trilhas' link='' />
        </div>
      </div>
    </section>
  );
}

export default TrailsSection;
