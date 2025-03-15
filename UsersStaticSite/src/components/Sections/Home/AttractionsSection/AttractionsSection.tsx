import React from 'react';
import Carousel from '../../../Carousel/Carousel.tsx';
import AttractionCard from '../../../Cards/AttractionCard/AttractionCard.tsx';
import ButtonCustom from '../../../ButtonCustom/ButtonCustom.tsx';
import { useQuery } from '@tanstack/react-query';
import CardSkeleton from '../../../Skeletons/CardSkeleton.tsx';
import { FetchError } from '../../../Errors/FetchError.tsx';
import { getAttractions } from '../../../../api/attractions/getAttractions.ts';
import { AtracaoLocalHomeCard, ResponseDTO } from '../../../../shared-lib/typesHomePage.ts';

function AttractionsSection(): React.ReactNode {
  const { data: responseAtracaoDTO, isLoading, isError, refetch } = useQuery<ResponseDTO<AtracaoLocalHomeCard[]>>({
    queryKey: ['attractions'],
    queryFn: getAttractions,
  });

  return (
    <section className="bg-white dark:bg-lightGrey w-full">
      <div className="py-12 md:py-20 flex flex-col items-start gap-8 home-content-container">
        <h1 className='text-h1 text-black dark:text-white text-center'>
          ATRAÇÕES <strong className='text-h1 text-primary dark:text-secondary'>LOCAIS</strong>
        </h1>

        {isError && (
          <FetchError action={refetch} content='atrações' />
        )}

        <div className="w-full">
          <Carousel className='flex-shrink-0 lg:justify-between'>
            {isLoading
              ? Array(3)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex-shrink-0">
                    <CardSkeleton />
                  </div>
                ))
              : responseAtracaoDTO?.data?.map((attraction, index) => (
                <div key={index} className={``}>
                  <AttractionCard
                    imageData={attraction.imageData}
                    linkUrl={attraction.linkUrl}
                    title={attraction.title}
                    shortDescription={attraction.shortDescription}
                  />
                </div>
              ))}
          </Carousel>
        </div>
        <div className={`${isLoading || isError ? 'hidden' : 'flex'} justify-start`}>
          <ButtonCustom variant='primary' text='Exibir mais' content='Atrações locais' link='' />
        </div>
      </div>
    </section>
  );
}

export default AttractionsSection;