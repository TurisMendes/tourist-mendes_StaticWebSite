import React from 'react';

function CoverImage(): React.ReactNode {

  return (
    <section className="relative w-full flex flex-col items-start justify-center">
      <img
        src="/images/image1.png"
        alt=""
        className="w-full h-[632px] object-cover"
      />
      <div className='absolute bottom-12 flex flex-col items-start justify-center gap-2 w-full px-4 md:pl-8'>
        <div className='w-full md:max-w-[770px] md:mx-auto lg:max-w-[944px] xl:max-w-[1140px]'>
          <h1 className="text-h1 leading-8 text-white">Ruínas da Fazenda Santa Rita</h1>
          <h2 className="text-h2 leading-6 text-white">Arquitetura histórica</h2>
        </div>
      </div>
    </section>
  )
}

export default CoverImage;