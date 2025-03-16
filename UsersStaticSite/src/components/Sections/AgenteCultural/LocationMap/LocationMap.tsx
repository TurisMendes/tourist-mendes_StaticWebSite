import React from 'react';

interface Props {
  link: string | undefined;
}

function LocationMap({ link }: Props): React.ReactNode {
  if (!link) return null;
  return (
    <div className="LocationMap w-full">
      <section className=' LocationMap__content mt-[50px] md:mt-[80px] flex flex-col items-start w-full'>
        <h2 className='LocationMap__title text-h2 font-bold text-[24px] leading-[1.4] mb-[16px]'>Endereço</h2>
        <iframe
          title="Direções para a atração"
          src={link}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className='LocationMap__map w-full h-[327px] rounded-2xl'
        ></iframe>
      </section>

    </div>
  )
}

export default LocationMap;