import React from 'react';
import Carousel from '../../../Carousel/Carousel.tsx';
import ButtonCustom from '../../../ButtonCustom/ButtonCustom.tsx';
import { useQuery } from '@tanstack/react-query';
import EventCard from '../../../Cards/EventCard/EventCard.tsx';
import EventSkeleton from '../../../Skeletons/EventSkeleton.tsx';
import { FetchError } from '../../../Errors/FetchError.tsx';
import { getEvents } from '../../../../api/events/getEvents.ts';

function EventsSection(): React.ReactNode {
  const sectionref = React.useRef<HTMLDivElement>(null);

  const { data: responseEventsDTO, isLoading, isError, refetch } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });

  return (
    <section className="w-full dark:bg-darkBlack">
      <div className="w-full xl:max-w-[1142px] py-12 md:py-20 flex flex-col items-start gap-8 app-container">
        <h1 className='text-h1 text-black dark:text-white text-center'>EVENTOS</h1>

        {isError && (
          <FetchError action={refetch} content='eventos' />
        )}

        <div ref={sectionref} className="w-full lg:pl-0">
          <Carousel className='flex flex-col lg:flex-row md:flex-wrap lg:justify-between'>
            {isLoading
              ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex-shrink-0 pl-4">
                    <EventSkeleton />
                  </div>
                ))
              : responseEventsDTO?.data?.map((event, index) => (
                <div key={index} className="w-full lg:min-w-[464px] lg:h-[614px] xl:min-w-[562px]">
                  <EventCard
                    imageData={event.imageData}
                    linkUrl={event.linkUrl}
                    eventTitle={event.eventTitle}
                    shortDescription={event.shortDescription}
                    sectionRef={sectionref}
                  />
                </div>
              ))}
          </Carousel>
        </div>
        <div className={`${isLoading || isError ? 'hidden' : 'flex'} justify-start pl-4 md:pl-0 lg:pl-2`}>
          <ButtonCustom variant='primary' text='Exibir mais' content='Eventos' link='' />
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
