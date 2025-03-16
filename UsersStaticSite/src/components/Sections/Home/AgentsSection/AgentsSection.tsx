import React from 'react';
import Carousel from '../../../Carousel/Carousel.tsx';
import ButtonCustom from '../../../ButtonCustom/ButtonCustom.tsx';
import { useQuery } from '@tanstack/react-query';
import AgentCard from '../../../Cards/AgentCard/AgentCard.tsx';
import AgentSkeleton from '../../../Skeletons/AgentSkeleton.tsx';
import { FetchError } from '../../../Errors/FetchError.tsx';
import { AgenteCulturalHomeCard, ResponseDTO } from '../../../../shared-lib/typesHomePage.ts';
import { getAgents } from '../../../../api/agents/getAgents.ts';

function AgentsSection(): React.ReactNode {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  const { data: responseAgenteDTO, isLoading, isError, refetch } = useQuery<ResponseDTO<AgenteCulturalHomeCard[]>>({
    queryKey: ['agents'],
    queryFn: getAgents,
  });

  
  return (
    <section className="w-full dark:bg-darkBlack">
      <div className="py-12 md:py-20 flex flex-col items-start gap-8 home-content-container">
        <h1 className="text-h1 text-black dark:text-white leading-8">
          AGENTES <strong className="text-h1 text-primary dark:text-secondary">CULTURAIS</strong>
        </h1>

        {isError && <FetchError action={refetch} content="agentes" />}

        <div  ref={sectionRef}  className="w-full">
          <Carousel className="lg:flex-wrap lg:justify-start">
            {isLoading
              ? Array(6)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex-shrink-0">
                    <AgentSkeleton />
                  </div>
                ))
              : responseAgenteDTO?.data?.map((agent: AgenteCulturalHomeCard, index: number) => (
                <div key={index} className="w-full">
                  <AgentCard
                    imageData={agent.imageData}
                    linkUrl={agent.linkUrl}
                    name={agent.name}
                    shortDescription={agent.shortDescription}
                  />
                </div>
              ))}
          </Carousel>
        </div>

        <div className={`${isLoading || isError ? 'hidden' : 'flex'} justify-start`}>
          <ButtonCustom variant="primary" text="Exibir mais" content="Agentes culturais" link="" />
        </div>
      </div>
    </section>
  );
}

export default AgentsSection;
