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

function LocalAttraction(): React.ReactNode {
  return (
    <>
      <Helmet>
        <title>Ruinas da fazenda santa rita</title>
        <meta
          name="description"
          content={`Descubra sobre Ruinas da fazenda santa rita. Saiba mais sobre sua história, horário de funcionamento, veja fotos e vídeos sobre o local.`} />
      </Helmet>
      <main className="relative bg-white dark:bg-lightBlack pb-20">
        <div className='flex flex-col'>
          <CoverImage />
          <Breadcrumb />
        </div>
        <div className='w-full flex flex-col md:max-w-[770x] md:items-start md:justify-center md:mx-auto lg:max-w-[944px] xl:flex-row xl:justify-between xl:max-w-[1140px]'>
          <AttractionDescription />
          <div className="flex flex-col gap-12 md:max-w-[770px] md:items-start justify-center md:mx-auto lg:max-w-[944px] xl:mx-0">
            <CarouselPhotos />
            <CarouselVideos />
            <Tour360 />
            <LocationMap />
          </div>
          <div className='flex flex-col md:w-[700px] md:items-start md:justify-center md:mx-auto lg:w-[944px] xl:hidden'>
            <WorkingTime />
            <AttractionContact />
          </div>
        </div>
      </main>
    </>
  );
}

export default LocalAttraction;
