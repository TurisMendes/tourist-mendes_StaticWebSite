import React from 'react';
import clsx from 'clsx';

interface TrailCardProps {
  difficulty: 'fácil' | 'médio' | 'difícil';
}

function TrailCard({ difficulty }: TrailCardProps): React.ReactNode {

  const difficultyLevels = clsx('w-fit rounded-full px-2',
    {
      'bg-lightGreen text-darkGreen font-inter font-normal text-base':
        difficulty === 'fácil',
      'bg-lightYellow text-darkYellow font-inter font-normal text-base':
        difficulty === 'médio',
      'bg-lightRed text-darkRed font-inter font-normal text-base':
        difficulty === 'difícil'
    }
  )

  return (
    <article aria-labelledby='trail-name' aria-describedby='trail-description trail-difficulty' className='flex flex-col w-[280px] h-[412px] lg:w-[273px] bg-white dark:bg-darkGrey rounded-2xl'>
      <a href='#' className='self-center' aria-label={`Trilha Mendes, Dificuldade:${difficulty}, Descrição: Descrição da trilha`}>
        <img
          src="./src/assets/images/image4.jpg"
          alt=""
          className='w-[233px] h-[180px] rounded-xl mt-4 object-cover lg:hover:scale-105 transition-transform duration-200'
        />
        <div className='flex flex-col items-start justify-start'>
          <h2 id='trail-name' className='font-inter font-bold text-2xl pt-4 pb-2 text-black dark:text-white'>Trilha Mendes</h2>
          <div>
            <span id='trail-difficulty' className={difficultyLevels}>Dificuldade: {difficulty}</span>
          </div>
          <span id='trail-description' className='pt-6 font-inter font-normal text-base text-black dark:text-white'>Descrição da trilha</span>
        </div>
      </a>
    </article>

  );
}

export default TrailCard;
