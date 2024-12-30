import React from 'react';
import ButtonCustom from '../ButtonCustom/ButtonCustom';

function EventCard(): React.ReactNode {

  return (
    <article aria-labelledby='event-title' className="flex flex-col md:flex-row items-start md:items-center justify-start gap-5 w-[318px] h-[414px] md:w-[760px] md:h-[348px] lg:w-[562px] rounded-2xl p-5 bg-white dark:bg-darkGrey">
      <img
        src="./src/assets/images/image3.jpg"
        alt=""
        className='w-[318px] h-[146px] md:w-[357px] md:h-[308px] lg:w-[253px] rounded-xl object-cover lg:hover:scale-105 transition-transform duration-200'
      />
      <div className='flex flex-col items-start justify-between gap-1 h-full'>
        <div className='flex flex-col gap-2'>
          <h2 id='event-title' className='w-full lg:w-full font-inter font-bold text-2xl text-black dark:text-white'>Chorinho</h2>
          <p className='font-inter font-normal text-base text-black dark:text-white'>Descrição do evento</p>
        </div>
        <ButtonCustom text='Saiba mais' variant='secondary' textColor='text-primary'/>
      </div>
    </article>
  );
}

export default EventCard;
