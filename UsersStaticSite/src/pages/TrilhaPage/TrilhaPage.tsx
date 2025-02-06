import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import CoverImage from '../../components/Sections/LocalAttraction/CoverImage/CoverImage';
import Breadcrumb from '../../components/Sections/LocalAttraction/Breadcrumb/Breadcrumb';
import CarouselVideos from '../../components/Sections/LocalAttraction/CarouselVideos/CarouselVideos';
import CarouselPhotos from '../../components/Sections/LocalAttraction/CarouselPhotos/CarouselPhotos';
import ButtonBackToTop from '../../components/ButtonBackToTop/ButtonBackToTop';
import ContactEvento from '../../components/Sections/Evento/ContactEvento/ContactEvento';
import LocalAttractionSkeleton from '../../components/Skeletons/LocalAttractionSkeleton';
import FullTrilhaType from '../../shared-lib/FullTrilhaType';
import { getTrilhaById } from '../../api/getTrilhaById/getTrilhaById';
import DescriptionTrilha from '../../components/Sections/Trilha/DescriptionTrilha/DescriptionTrilha';
import TrilhaMap from '../../components/Sections/Trilha/TrilhaMap/TrilhaMap';
import WorkingTime from '../../components/Sections/LocalAttraction/WorkingTime/WorkingTime';
import Foto360 from '../../components/Sections/Trilha/Foto360/Foto360';

function TrilhaPage(): React.ReactNode {
  const { id } = useParams<{ id: string }>();
  const [selectedTrilha, setSelectedTrilha] = useState<FullTrilhaType | undefined>();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['trail', id],
    queryFn: () => getTrilhaById(id!),
    enabled: !!id,
  });

  useEffect(() => {
    if (!id) {
      navigate('/notFound');
      return;
    }
    if (!isLoading && data) {
      setSelectedTrilha(data.data);
    } else if (isError) {
      navigate('/notFound');
    }
  }, [id, isLoading, data, isError, navigate]);

  return (
    <>
      {isLoading ? <LocalAttractionSkeleton /> : <>
        {selectedTrilha && (<>
          <Helmet>
            <title>{selectedTrilha.title}</title>
            <meta
              name="description"
              content={`Descubra sobre ${selectedTrilha.title}. Saiba mais sobre sua história, horários, veja fotos e vídeos sobre a trilha.`} />
          </Helmet>
          <main className="relative bg-white dark:bg-lightBlack pb-20">
            <div className='flex flex-col'>
              <CoverImage src={selectedTrilha.coverImage} title={selectedTrilha.title} category={selectedTrilha.category} />
              <Breadcrumb title={selectedTrilha.title} />
            </div>
            <div className='w-full mt-12 flex gap-12 flex-col md:max-w-[770x] md:mt-20 md:items-start md:justify-center md:mx-auto lg:gap-6 lg:max-w-[944px] xl:flex-row xl:justify-between xl:max-w-[1140px]'>
              <DescriptionTrilha
                description={selectedTrilha.longDescription}
                info={selectedTrilha.trilhaInfo}
                timeInfo={selectedTrilha.workingTime}
                contacts={selectedTrilha.contacts}
                socials={selectedTrilha.socialMedia}
                workingTime={selectedTrilha.workingTime}
              />
              <div className="flex flex-col md:max-w-[770px] md:items-start justify-center md:mx-auto xl:gap-16 lg:max-w-[944px] xl:mx-0">
                {selectedTrilha.photoGallery && <CarouselPhotos photos={selectedTrilha.photoGallery} />}
                {selectedTrilha.videos.length > 0 && <CarouselVideos videos={selectedTrilha.videos} />}
                {selectedTrilha.tour360UrlLink && <Foto360 link={selectedTrilha.tour360UrlLink} />}
                {selectedTrilha.linkUrlForGPX && <TrilhaMap link={selectedTrilha.linkUrlForGPX} />}
              </div>

              <div className='flex flex-col gap-12 md:min-w-[740px] md:w-[770px] md:items-start justify-center md:mx-auto lg:w-[944px] xl:hidden'>
                {selectedTrilha.workingTime && <WorkingTime text={selectedTrilha.workingTime} />}
                <ContactEvento content={selectedTrilha.contacts} socials={selectedTrilha.socialMedia} />
              </div>

            </div>
            <ButtonBackToTop />
          </main>
        </>)}</>}
    </>
  )
}

export default TrilhaPage;
