import React from 'react';
import Carousel from '../../Carousel/Carousel.tsx';
import ButtonCustom from '../../ButtonCustom/ButtonCustom.tsx';
import { useQuery } from '@tanstack/react-query';
import AgentCard from '../../Cards/AgentCard/AgentCard.tsx';
import AgentSkeleton from '../../Skeletons/AgentSkeleton.tsx';
import { getAgents } from '../../../api/agents/index.ts';
import { FetchError } from '../../Errors/FetchError.tsx';

function AgentsSection(): React.ReactNode {

  const { data: agents, isLoading, isError, refetch } = useQuery({
    queryKey: ['agents'],
    queryFn: getAgents,
    initialData: undefined,
  });


  return (
    <section className="w-full dark:bg-darkBlack">
      <div className="lg:w-[944px] xl:w-[1142px] mr-0 ml-4 md:ml-8 lg:mx-10 xl:mx-auto py-12 md:py-20 flex flex-col items-start gap-8">
        <h1 className='text-h1 text-black dark:text-white leading-8'>
          AGENTES <strong className='text-h1 text-primary dark:text-secondary'>CULTURAIS</strong>
        </h1>

        {isError && (
          <FetchError action={refetch} content='agentes' />
        )}

        <div className="w-full">
          <Carousel className='lg:flex-wrap'>
            {isLoading
              ? Array(6)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex-shrink-0">
                    <AgentSkeleton />
                  </div>
                ))
              : agents?.data.map((agent, index) => (
                <div key={index} className="flex-shrink-0">
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

        <div className={`${isLoading || isError ? 'hidden' : 'flex '} justify-start`}>
          <ButtonCustom variant='primary' text='Exibir mais' content='Agentes culturais' link='' />
        </div>
      </div>
    </section>
  );
}

export default AgentsSection;
