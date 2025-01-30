import React from 'react';
import { Helmet } from 'react-helmet-async';
import CarouselPhotos from '../../components/Sections/LocalAttraction/CarouselPhotos/CarouselPhotos';
import CarouselVideos from '../../components/Sections/LocalAttraction/CarouselVideos/CarouselVideos';
import Tour360 from '../../components/Sections/LocalAttraction/Tour360/Tour360';
import LocationMap from '../../components/Sections/LocalAttraction/LocationMap/LocationMap';
import WorkingTime from '../../components/Sections/LocalAttraction/WorkingTime/WorkingTime';
import AttractionContact from '../../components/Sections/LocalAttraction/AttractionContact/AttractionContact';
import CoverImage from '../../components/Sections/LocalAttraction/CoverImage/CoverImage';
import Breadcrumb from '../../components/Sections/LocalAttraction/Breadcrumb/Breadcrumb';
import AttractionDescription from '../../components/Sections/LocalAttraction/AttractionDescription/AttractionDescription';
import { useParams } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
import ButtonBackToTop from '../../components/ButtonBackToTop/ButtonBackToTop';
import { useQuery } from '@tanstack/react-query';
import { getAttractionById } from '../../api/attraction/getAttractionById';
import LocalAttractionSkeleton from '../../components/Skeletons/LocalAttractionSkeleton';

function LocalAttraction(): React.ReactNode {
  const { id } = useParams<{ id: string }>();

  const { data: responseAttractionDTO, isLoading, isError } = useQuery({
    queryKey: ['attraction', id],
    queryFn: () => getAttractionById(id!),
    enabled: !!id,
  });

  const selectedAttraction = responseAttractionDTO?.data;

  if (isLoading) {
    return <LocalAttractionSkeleton />;
  }

  if (isError) {
    return <NotFound />;
  }

  if (!id || !selectedAttraction) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{selectedAttraction?.title}</title>
        <meta
          name="description"
          content={`Descubra sobre Ruinas da fazenda santa rita. Saiba mais sobre sua história, horário de funcionamento, veja fotos e vídeos sobre o local.`} />
      </Helmet>
      <main className="relative bg-white dark:bg-lightBlack pb-20">
        <div className='flex flex-col'>
          <CoverImage src={selectedAttraction?.coverImage} title={selectedAttraction?.title} category={selectedAttraction?.category} />
          <Breadcrumb title={selectedAttraction.title} />
        </div>
        <div className='w-full mt-12 flex flex-col md:max-w-[770x] md:mt-20 md:items-start md:justify-center md:mx-auto lg:max-w-[944px] xl:flex-row xl:justify-between xl:max-w-[1140px]'>
          <AttractionDescription
            description={selectedAttraction?.longDescription}
            info={selectedAttraction?.historicalInfo}
            timeInfo={selectedAttraction.workingTime}
            contacts={selectedAttraction.contacts}
            socials={selectedAttraction.socialMedia}
          />
          <div className="flex flex-col gap-12 md:max-w-[770px] md:items-start justify-center md:mx-auto lg:max-w-[944px] xl:mx-0">
            <CarouselPhotos photos={selectedAttraction?.photoGallery} />
            <CarouselVideos videos={selectedAttraction.videos} />
            <Tour360 link={selectedAttraction.tour360UrlLink} />
            <LocationMap link={selectedAttraction.mapUrlLink} />
          </div>
          <div className='flex flex-col md:w-[770px] md:items-start md:justify-center md:mx-auto lg:w-[944px] xl:hidden'>
            <WorkingTime text={selectedAttraction.workingTime} />
            <AttractionContact content={selectedAttraction.contacts} socials={selectedAttraction.socialMedia} />
          </div>
        </div>
        <ButtonBackToTop />
      </main>
    </>
  );
}

export default LocalAttraction;
