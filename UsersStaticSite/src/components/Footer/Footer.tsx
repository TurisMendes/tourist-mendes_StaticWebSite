import React from 'react';
import Marquee from '../Marquee/Marquee';

function Footer(): React.ReactNode {

  return (
    <footer className="bg-offwhite dark:bg-lightGrey w-full" >

      <div className='flex flex-col sm:flex-row max-w-7xl mx-auto pl-4 pr-0 md:px-8 lg:px-16 py-12 md:py-20 items-start justify-between gap-8'>
        <section className='flex flex-col items-start gap-2 w-[280px] md:w-[320px] lg:w-[470px] mb-8'>
          <h2 className='text-h2 mb-2'>SOBRE</h2>
          <p className='body-level-1 font-normal'>O TurisMendes nasceu para valorizar a cultura, história e talentos de Mendes-RJ.</p>
          <p className='body-level-1 font-normal'>Através de placas turísticas com QR Codes e uma plataforma online interativa, o projeto conecta visitantes e moradores às riquezas locais.</p>
          <p className='body-level-1 font-normal'>Com o intuito de preservar o patrimônio e promover o turismo, o TurisMendes transforma a maneira como a cidade se apresenta ao mundo!</p>
        </section>

        <section className='flex flex-col gap-8 md:gap-10'>
          <div className='flex flex-col w-[280px]'>
            <h2 className='text-h2 mb-4'>E-MAIL</h2>
            <a
              href="mailto:cultura@mendes.rj.gov.br"
              className='body-level-1 font-normal'
              aria-label='Email: cultura@mendes.rj.gov.br'
            >
              cultura@mendes.rj.gov.br
            </a>
            <a
              href="mailto:turismo@mendes.rj.gov.br"
              className='body-level-1 font-normal'
              aria-label='Email: turismo@mendes.rj.gov.br'
            >
              turismo@mendes.rj.gov.br
            </a>
          </div>
          <div className='flex flex-col w-[280px]'>
            <h2 className='text-h2 mb-4'>TELEFONE</h2>
            <a
              href="tel:+552498865-6016"
              className='body-level-1 font-normal'
              aria-label='Telefone: +55(24)98865-6016'
            >
              (24) 98865-6016
            </a>
          </div>
          <div className='flex flex-col w-[280px] sm:w-[310px] lg:w-[400px] xl:w-full'>
            <h2 className='text-h2 mb-4'>ENDEREÇO</h2>
            <a
              href="https://maps.app.goo.gl/SkDHrywTBv2hhYRY9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='Endereço: Rua Maria Stella de Almeida Moura, 57 - 2º andar - Centro. CEP: 26700-000'
            >
              <address className='body-level-1 font-normal'>Rua Maria Stella de Almeida Moura, 57 - 2º andar - Centro</address>
              <address className='body-level-1 font-normal'>CEP: 26700-000</address>
            </a>
          </div>
        </section>
      </div>

      <div className='bg-offwhite dark:bg-white w-[95%] flex items-center justify-center mx-auto h-[2px] mt-12 mb-10' />

      <Marquee />
    </footer >
  );
}

export default Footer;
