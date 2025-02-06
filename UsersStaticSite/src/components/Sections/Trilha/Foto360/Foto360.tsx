import React from 'react';
import ButtonCustom from '../../../ButtonCustom/ButtonCustom';

interface Props { 
  link: string;
}

function Foto360({ link }: Props): React.ReactNode {

  return (
    <section className='flex flex-col items-start justify-center px-4 gap-4 md:px-0 lg:px-0'>
      <h2 className='text-h2'>Foto 360</h2>
      <p className='text-level-1 font-normal max-w-[354px] md:max-w-[770px] lg:max-w-[950px] xl:max-w-[540px]'>Uma foto 360 é uma experiência virtual que permite ver tudo ao seu redor, como se você estivesse no meio da cena. É uma imagem tirada de forma que você pode olhar em qualquer direção – para cima, para baixo, para os lados e até mesmo para trás.</p>
      <ButtonCustom text='Explorar em 360º' variant='primary' link={link} width='button-large'/>
    </section>
  )
}

export default Foto360;