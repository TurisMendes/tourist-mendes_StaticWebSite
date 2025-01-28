import React from 'react';

function LocationMap(): React.ReactNode {

  return (
    <section className='mt-12 flex flex-col items-start gap-4 w-full px-4 md:px-8 lg:px-0'>
      <h1 className='text-h1'>Localização</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7370.275093092983!2d-43.7639041!3d-22.5365197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x994b0023b0ed4f%3A0x8b67314b554a5e16!2sMiranteBoaEsperan%C3%A7a!5e0!3m2!1sen!2sbr!4v1737930359025!5m2!1sen!2sbr"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='w-full h-[327px] rounded-lg'
      ></iframe>
    </section>
  )
}

export default LocationMap;