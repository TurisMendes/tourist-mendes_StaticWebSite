import React from 'react';
import Carousel from '../../Carousel/Carousel.tsx';
import ButtonCustom from '../../ButtonCustom/ButtonCustom.tsx';
import { useQuery } from '@tanstack/react-query';
import EventCard from '../../Cards/EventCard/EventCard.tsx';
import EventSkeleton from '../../Skeletons/EventSkeleton.tsx';
import { getEvents } from '../../../api/events/index.ts';
import { FetchError } from '../../Errors/FetchError.tsx';

function EventsSection(): React.ReactNode {

  const { data: events, isLoading, isError, refetch } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
    initialData: undefined,
  });


  return (
    <section className="w-full dark:bg-darkBlack">
      <div className="xl:w-[1142px] mr-0 ml-4 md:ml-8 lg:mx-10 xl:mx-auto py-12 md:py-20 flex flex-col items-start gap-8">
      <h1 className='text-h1 text-black dark:text-white text-center'>EVENTOS</h1>

        {isError && (
          <FetchError action={refetch} content='eventos' />
        )}

        <div className="w-full">
          <Carousel className='md:flex-wrap'>
            {isLoading
              ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex-shrink-0">
                    <EventSkeleton />
                  </div>
                ))
              : events?.data.map((event, index) => (
                <div key={index} className="flex-shrink-0">
                  <EventCard
                    imageData={event.imageData}
                    linkUrl={event.linkUrl}
                    eventTitle={event.eventTitle}
                    shortDescription={event.shortDescription}
                  />
                </div>
              ))}
          </Carousel>
        </div>
        <div className={`${isLoading || isError ? 'hidden' : 'flex'} justify-start`}>
          <ButtonCustom variant='primary' text='Exibir mais' content='Eventos' link='' />
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
