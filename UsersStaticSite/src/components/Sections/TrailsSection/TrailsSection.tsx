import React from 'react';
import Carousel from '../../Carousel/Carousel.tsx';
import ButtonCustom from '../../ButtonCustom/ButtonCustom.tsx';
import { useQuery } from '@tanstack/react-query';
import TrailSkeleton from '../../Skeletons/TrailSkeleton.tsx';
import TrailCard from '../../Cards/TrailCard/TrailCard.tsx';
import { getTrails } from '../../../api/trails/index.ts';
import { FetchError } from '../../Errors/FetchError.tsx';

function TrailsSection(): React.ReactNode {

  const { data: trails, isLoading, isError, refetch } = useQuery({
    queryKey: ['trails'],
    queryFn: getTrails,
    initialData: undefined,
  });

  return (
    <section className="bg-white dark:bg-lightGrey w-full">
      <div className="xl:w-[1142px] mr-0 ml-4 md:ml-8 lg:mx-10 xl:mx-auto py-12 md:py-20 flex flex-col items-start gap-8">
        <h1 className='text-h1 text-black dark:text-white text-center'>TRILHAS</h1>

        {isError && (
          <FetchError action={refetch} content='trilhas' />
        )}

        <div className="w-full">
          <Carousel className='flex-shrink-0'>
            {isLoading
              ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex-shrink-0">
                    <TrailSkeleton />
                  </div>
                ))
              : trails?.data.map((trails, index) => (
                <div key={index} className="flex-shrink-0">
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
        <div className={`${isLoading || isError ? 'hidden' : 'flex'} justify-center`}>
          <ButtonCustom variant='primary' text='Exibir mais' content='Trilhas' link='' />
        </div>
      </div>
    </section>
  );
}

export default TrailsSection;
