import { SquareArrowOutUpRight } from 'lucide-react';
import React from 'react';
import ContactTrilha from '../ContactTrilha/ContactTrilha';
import { Link } from 'react-router-dom';
import WorkingTime from '../../LocalAttraction/WorkingTime/WorkingTime';

interface Props {
  description: string | undefined;
  info: {
    extension: number;
    avgDuration: string;
    difficulty: "facil" | "moderada" | "dificil" | "muito dificil" | "experts";
    linkUrlMoreInfo: string;
  };
  timeInfo: string;
  contacts: {
    phoneNumbers: string[];
    email: string[];
    site: string[];
    address: string[];
  };
  workingTime: string;
  isLoading: boolean;
}

function DescriptionTrilha({ description, info, contacts, workingTime, isLoading }: Props): React.ReactNode {

  return (
    <section className='px-4 flex flex-col gap-12 md:px-8 lg:px-0 md:items-start md:justify-center md:mx-auto lg:mx-0 lg:gap-20'>
      <section className='max-w-[335px] flex flex-col gap-4 md:max-w-[770px] lg:max-w-[944px] xl:max-w-[530px] xl:max-h-[242px]'>
        <h2 className='text-h2 text-black'>Descrição</h2>
        <p className='text-level-1 font-normal '>{description}</p>
      </section>

      <section className='flex flex-col gap-4 md:w-full'>
        <h2 className='text-h2 text-black'>Informações da trilha</h2>
        <article className='w-full flex flex-wrap gap-4 md:gap-12 md:flex-row md:items-start md:justify-between xl:w-fit xl:gap-0'>
          <div className='flex w-[176px] flex-col'>
            <h3 className='text-h2 text-primary dark:text-secondary'>{info.extension} km</h3>
            <p className='text-level-1 text-gray-700 font-normal'>Extensão</p>
          </div>
          <div className='flex w-[176px] flex-col'>
            <p className='text-h2 text-primary dark:text-secondary'>{info.avgDuration}</p>
            <p className='text-level-1 text-gray-700 font-normal'>Duração Média</p>
          </div>
          <div className='flex w-[176px] flex-col'>
            <p className='text-h2 text-primary dark:text-secondary capitalize'>{info.difficulty}</p>
            <p className='text-level-1 text-gray-700 font-normal'>Dificuldade</p>
          </div>
        </article>
        <div className='flex'>
          <Link to={info.linkUrlMoreInfo} target='_blank' className='group flex gap-2 items-center' rel="noreferrer">
            <p className='text-level-1 font-montserrat text-primary group-hover:text-primaryDark group-active:text-primaryActive underline underline-offset-1 dark:text-secondary dark:group-hover:text-secondaryDark dark:group-active:text-secondaryActive'>
              Mais informações
            </p>
            <SquareArrowOutUpRight className='text-primary group-hover:text-primaryDark group-active:text-primaryActive underline underline-offset-1 dark:text-secondary dark:group-hover:text-secondaryDark dark:group-active:text-secondaryActive w-5 h-5' />
          </Link>
        </div>
      </section>

      <div className='hidden xl:flex xl:flex-col xl:gap-20'>
        <WorkingTime text={workingTime} isLoading={isLoading} />
        <ContactTrilha content={contacts} isLoading={isLoading} />
      </div>
    </section>
  )

}


export default DescriptionTrilha;