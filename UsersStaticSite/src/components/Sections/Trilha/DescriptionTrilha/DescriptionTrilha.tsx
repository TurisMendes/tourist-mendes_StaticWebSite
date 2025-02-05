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
  socials: {
    instagram?: string;
    facebooK?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
  workingTime: string;
}

function DescriptionTrilha({ description, info, contacts, socials, workingTime }: Props): React.ReactNode {

  return (
    <section className='px-4 flex flex-col gap-12 md:px-8 lg:px-0 md:items-start md:justify-center md:mx-auto lg:mx-0'>
      <section className='max-w-[335px] flex flex-col gap-4 md:max-w-[770px] lg:max-w-[944px] xl:max-w-[530px] xl:max-h-[242px]'>
        <h2 className='text-h2 text-black'>Descrição</h2>
        <p className='text-level-1 font-normal '>{description}</p>
      </section>

      <section className='flex flex-col gap-4 md:w-full'>
        <h2 className='text-h2 text-black'>Informações da trilha</h2>
        <article className='w-full flex flex-col gap-4 md:gap-12 md:flex-row md:items-start md:justify-evenly lg:gap-20 xl:w-fit xl:gap-6'>
          <div className="flex w-full gap-6 xl:w-fit">
            <div className='flex flex-col w-full xl:w-fit'>
              <h3 className='text-h2 text-primary dark:text-secondary'>{info.extension} km</h3>
              <p className='text-level-1 text-gray-700 font-normal'>Extensão</p>
            </div>
            <div className='flex flex-col w-full xl:w-fit'>
              <p className='text-h2 text-primary dark:text-secondary'>{info.avgDuration}</p>
              <p className='text-level-1 text-gray-700 font-normal'>Duração Média</p>
            </div>
          </div>
          <div className='flex flex-col w-full xl:w-fit'>
            <p className='text-h2 text-primary dark:text-secondary capitalize'>{info.difficulty}</p>
            <p className='text-level-1 text-gray-700 font-normal'>Dificuldade</p>
          </div>
        </article>
        <div className='flex gap-2 items-center'>
          <Link to={info.linkUrlMoreInfo}>
            <p className='text-level-1 font-montserrat text-primary hover:text-primaryDark active:text-primaryActive underline underline-offset-1 dark:text-secondary dark:hover:text-secondaryDark dark:active:text-secondaryActive'>Mais informações</p>
          </Link>
          <SquareArrowOutUpRight className='text-primary w-5 h-5' />
        </div>
      </section>

      <div className='hidden xl:flex xl:flex-col xl:gap-6'>
        <WorkingTime text={workingTime} />
        <ContactTrilha content={contacts} socials={socials} />
      </div>
    </section>
  )

}


export default DescriptionTrilha;