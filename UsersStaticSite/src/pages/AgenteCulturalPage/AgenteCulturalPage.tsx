import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from "react-router-dom";
import FullAgenteCulturalType from "../../shared-lib/FullAgenteCulturalType";
import { useQuery } from '@tanstack/react-query';
import { Hero } from "../../components/Sections/AgenteCultural/Hero/Hero";
import { Descriptions } from "../../components/Sections/AgenteCultural/Descriptions/Descriptions";
import { AreasOfExpertise } from "../../components/Sections/AgenteCultural/AreasOfExpertise/AreasOfExpertise";
import CarouselPhotos from "../../components/Sections/AgenteCultural/CarouselPhotos/CarouselPhotos";
import CarouselVideos from "../../components/Sections/AgenteCultural/CarouselVideos/CarouselVideos";
import LocationMap from "../../components/Sections/AgenteCultural/LocationMap/LocationMap";
import AgenteCulturalContact from "../../components/Sections/AgenteCultural/AgenteCulturalContact/AgenteCulturalContact";
import AgenteCulturalPageSkeleton from "./AgenteCulturalPageSkeleton";
import { getCulturalAgentById } from "../../api/getAgenteCulturalById/getAgenteCulturalById";




export const AgenteCulturalPage: React.FC = (): React.ReactNode => {
  const { id } = useParams<{ id: string }>();
  const [selectedCulturalAgent, setSelectedCulturalAgent] = useState<FullAgenteCulturalType | undefined>();
  const [isWideScreen, setIsWideScreen] = useState<boolean>(window.innerWidth > 944);
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['culturalAgent', id],
    queryFn: () => getCulturalAgentById(id),
    enabled: !!id,
  });

  useEffect(() => {
    console.log(data);
    
    if (!id) {
      navigate("/notFound");
      return;
    }
    if (isError) {
      navigate("/notFound");
    }
  }, [id, isError, error, navigate]);

  useEffect(() => {
    if (!isLoading && data) {
      setSelectedCulturalAgent(data.data);
    }

  }, [isLoading, data]);


  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 944);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const metaDescription = selectedCulturalAgent
    ? `Agente cultural do tipo ${selectedCulturalAgent.category}, da cidade de Mendes-RJ especialista nas seguintes áreas de atuação: ${selectedCulturalAgent.tags.join(', ')}. Descubra mais sobre o agente cultural ${selectedCulturalAgent.name}. Saiba mais sobre sua tragetória profissional, seus contatos, fotos e vídeos.`
    : 'Conheça os agentes culturais e suas contribuições para a cultura local.';

  return (
    <>
      {isLoading ? (
        <AgenteCulturalPageSkeleton />
      ) : (
        <>
          {!isWideScreen ?
            (<div className="AgenteCultural">
              <div className="AgenteCultural__content min-h-screen">
                {selectedCulturalAgent && (
                  <>
                    <Helmet>
                      <title>{selectedCulturalAgent.name}</title>
                      <meta
                        name="description"
                        content={metaDescription} />
                    </Helmet>

                    <Hero
                      category={selectedCulturalAgent.category}
                      coverImageData={selectedCulturalAgent.coverImg}
                      name={selectedCulturalAgent.name}
                      profileImageData={selectedCulturalAgent.profileImg}
                    />

                    <div className="AgenteCultural__body app-container">
                      <div className="AgenteCultural__body-top-part flex flex-col lg:flex-row justify-between">
                        <div className="AgenteCultural__body-top-part--left lg:max-w-[700px]">
                          <Descriptions aboutMeDescription={selectedCulturalAgent.aboutMe} myContributionsDescription={selectedCulturalAgent.myContributions} />
                        </div>

                        <div className="AgenteCultural__body-top-part--right lg:max-w-[360px]">
                          <AreasOfExpertise tags={selectedCulturalAgent.tags} />

                          {selectedCulturalAgent.photoGallery && (
                            <CarouselPhotos photos={selectedCulturalAgent.photoGallery} isLoading={isLoading} />
                          )}

                          {selectedCulturalAgent.videos && (
                            <CarouselVideos videos={selectedCulturalAgent.videos} isLoading={isLoading} />
                          )}
                        </div>
                      </div>

                      <div className="AgenteCultural__body-bottom-part lg:max-w-[700px]">
                        {selectedCulturalAgent.mapUrlLink && (
                          <LocationMap link={selectedCulturalAgent.mapUrlLink} />
                        )}

                        <AgenteCulturalContact contacts={selectedCulturalAgent.contacts} socialMedias={selectedCulturalAgent.socialMedia} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>) :
            (
              <div className="AgenteCultural">
                <div className="AgenteCultural__content min-h-screen">
                  {selectedCulturalAgent && (
                    <>
                      <Helmet>
                        <title>{selectedCulturalAgent.name}</title>
                        <meta
                          name="description"
                          content={metaDescription} />
                      </Helmet>

                      <Hero
                        category={selectedCulturalAgent.category}
                        coverImageData={selectedCulturalAgent.coverImg}
                        name={selectedCulturalAgent.name}
                        profileImageData={selectedCulturalAgent.profileImg}
                      />

                      <div className="AgenteCultural__body app-container flex gap-[80px]">
                        <div className="AgenteCultural__body-top-part left-part flex flex-col justify-between lg:max-w-[700px]">
                          <div className="AgenteCultural__body-top-part--left lg:max-w-[700px]">
                            <Descriptions aboutMeDescription={selectedCulturalAgent.aboutMe} myContributionsDescription={selectedCulturalAgent.myContributions} />
                          </div>

                          <div className="AgenteCultural__body-bottom-part lg:max-w-[700px]">
                            {selectedCulturalAgent.mapUrlLink && (
                              <LocationMap link={selectedCulturalAgent.mapUrlLink} />
                            )}

                            <AgenteCulturalContact contacts={selectedCulturalAgent.contacts} socialMedias={selectedCulturalAgent.socialMedia} />
                          </div>
                        </div>

                        <div className="AgenteCultural__body-top-part--right min-w-[30%] lg:max-w-[360px]">
                          <AreasOfExpertise tags={selectedCulturalAgent.tags} />

                          {selectedCulturalAgent.photoGallery && (
                            <CarouselPhotos photos={selectedCulturalAgent.photoGallery} isLoading={isLoading} />
                          )}

                          {selectedCulturalAgent.videos && (
                            <CarouselVideos videos={selectedCulturalAgent.videos} isLoading={isLoading} />
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          }
        </>
      )}

    </>


  );
}