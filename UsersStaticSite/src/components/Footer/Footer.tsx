import React from 'react';
import { useTheme } from './../../hooks/useTheme';

function Footer(): React.ReactNode {
  const { isDarkMode } = useTheme();

  return (
    <footer className="bg-white dark:bg-lightGrey w-full" >

      <div className='flex flex-col sm:flex-row max-w-7xl mx-auto pl-4 pr-0 md:px-8 lg:px-16 py-12 md:py-20 items-start justify-between gap-8'>
        <section className='flex flex-col items-start gap-2 w-[280px] md:w-[400px] lg:w-[400px] mb-8'>
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
          <div className='flex flex-col w-[280px]'>
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

      <section className='w-full flex flex-col items-center justify-center xl:justify-between px-4'>
        <div className='w-full flex flex-col xl:flex-row xl:gap-32'>
          <div className='flex flex-col md:flex-row gap-12 md:gap-0 w-full items-center justify-between mb-16'>
            <img
              src="./src/assets/logos/TurisMendes.svg"
              alt=""
              className='w-[226px] h-[130px] lg:w-[226px] lg:h-[130px] object-cover grayscale'
            />

            <div className='w-full h-[100px] flex md:w-1/2 items-center justify-center md:justify-between gap-4'>
              <div className='w-fit flex flex-col items-center gap-2'>
                <h4 className='text-h4 text-black dark:text-white'>Realização</h4>
                <img
                  src="./src/assets/logos/SomosDev.png"
                  alt=""
                  className='w-[125px] h-[62px] object-cover grayscale'
                />
              </div>
              <div className='w-fit flex flex-col items-center gap-2'>
                <h4 className='text-h4 text-black dark:text-white'>Idealização</h4>
                <img
                  src={isDarkMode ? './src/assets/logos/ColetivoCafeina-Grey.png' : './src/assets/logos/ColetivoCafeina-Black.png'}
                  alt=""
                  className='w-[78px] h-[64px] object-cover grayscale'
                />
              </div>
            </div>
          </div>


          <div className='w-full xl:w-4/5 h-[100px] flex flex-col items-center justify-center my-8 xl:my-0 gap-4'>
            <h4 className='text-h4 text-black dark:text-white'>Fomentadores</h4>
            <div className=' w-[280px] xl:w-fit flex flex-wrap md:flex-nowrap items center justify-center gap-4 md:gap-8'>
              <img
                src="./src/assets/logos/PrefeituraMendes.png"
                alt=""
                className='w-[183px] h-[60px] object-cover grayscale'
              />
              <img
                src="./src/assets/logos/PNAB.png"
                alt=""
                className='object-cover'
              />
              <img
                src={isDarkMode ? "./src/assets/logos/GovernoFederal-white.png" : "./src/assets/logos/GovernoFederal-black.png"}
                alt=""
                className='object-cover grayscale'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center w-full my-8'>
          <p className='body-level-2 w-fit'>&copy; TurisMendes 2025.</p>
          <p className='body-level-2 w-fit'>Todos os direitos reservados.</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
