import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FullEventoType from '../../shared-lib/FullEventoType';
import { useQuery } from '@tanstack/react-query';
import { getEventoById } from '../../api/getEventoById/getEventoById';
import { Helmet } from 'react-helmet-async';
import CoverImage from '../../components/Sections/LocalAttraction/CoverImage/CoverImage';
import Breadcrumb from '../../components/Sections/LocalAttraction/Breadcrumb/Breadcrumb';
import DescriptionEvento from '../../components/Sections/Evento/DescriptionEvento/DescriptionEvento';
import CarouselVideos from '../../components/Sections/LocalAttraction/CarouselVideos/CarouselVideos';
import CarouselPhotos from '../../components/Sections/LocalAttraction/CarouselPhotos/CarouselPhotos';
import LocationMap from '../../components/Sections/LocalAttraction/LocationMap/LocationMap';
import ButtonBackToTop from '../../components/ButtonBackToTop/ButtonBackToTop';
import Calendario from '../../components/Sections/Evento/Calendario/Calendario';
import ContactEvento from '../../components/Sections/Evento/ContactEvento/ContactEvento';
import LocalAttractionSkeleton from '../../components/Skeletons/LocalAttractionSkeleton';

function EventoPage(): React.ReactNode {
  const { id } = useParams<{ id: string }>();
  const [selectedEvent, setSelectedEvent] = useState<FullEventoType | undefined>();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['event', id],
    queryFn: () => getEventoById(id!),
    enabled: !!id,
  });

  useEffect(() => {
    if (!id) {
      navigate('/notFound');
      return;
    }
    if (!isLoading && data) {
      setSelectedEvent(data.data);
    } else if (isError) {
      navigate('/notFound');
    }
  }, [id, isLoading, data, isError, navigate]);

  return (
    <>
      {isLoading ? <LocalAttractionSkeleton /> : <>
        {selectedEvent && (<>
          <Helmet>
            <title>{selectedEvent.title}</title>
            <meta
              name="description"
              content={`Descubra sobre ${selectedEvent.title}. Saiba mais sobre sua história, horários, veja fotos e vídeos sobre o evento.`} />
          </Helmet>
          <main className="relative bg-white dark:bg-lightBlack pb-20">
            <div className='flex flex-col'>
              <CoverImage src={selectedEvent.coverImage} title={selectedEvent.title} category={selectedEvent.category} />
              <Breadcrumb title={selectedEvent.title} />
            </div>
            <div className='w-full mt-12 flex gap-12 flex-col md:max-w-[770x] md:mt-20 md:items-start md:justify-center md:mx-auto lg:gap-20 lg:max-w-[944px] xl:flex-row xl:justify-between xl:max-w-[1140px]'>
              <DescriptionEvento
                description={selectedEvent.longDescription}
                info={selectedEvent.historicalInfo}
                timeInfo={JSON.stringify(selectedEvent.schedule)}
                contacts={selectedEvent.contacts}
                socials={selectedEvent.socialMedia}

              />
              <div className="flex flex-col md:max-w-[770px] md:items-start justify-center md:mx-auto xl:gap-16 lg:max-w-[944px] xl:mx-0">
                {selectedEvent.schedule && <Calendario schedule={selectedEvent.schedule} />}
                {selectedEvent.photoGallery && <CarouselPhotos photos={selectedEvent.photoGallery} />}
                {selectedEvent.videos.length > 0 && <CarouselVideos videos={selectedEvent.videos} />}
                <LocationMap link={selectedEvent.mapUrlLink} />
              </div>

              <div className='flex flex-col md:min-w-[740px] md:w-[770px] md:items-start justify-center md:mx-auto lg:w-[944px] xl:hidden'>
                <ContactEvento content={selectedEvent.contacts} socials={selectedEvent.socialMedia} />
              </div>

            </div>
            <ButtonBackToTop />
          </main>
        </>)}</>}
    </>
  )
}

export default EventoPage;
