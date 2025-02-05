import React, { useEffect, useState } from 'react';
import Marquee from '../Marquee/Marquee';
import { AboutSessionData } from '../../shared-lib/typesHomePage';

function Footer(): React.ReactNode {
  const [sobre, setSobre] = useState<undefined | AboutSessionData >(undefined);

  useEffect(() => {
    fetch('/about.json')
      .then(res => res.json())
      .then(response => {
        const sobre = response as AboutSessionData;
        setSobre(sobre)
      })
  }, [])
  return (
    <footer className="bg-offwhite dark:bg-lightGrey w-full" >

      <div className='flex flex-col sm:flex-row max-w-7xl mx-auto pl-4 pr-0 md:px-8 lg:px-16 py-12 md:py-20 items-start justify-between gap-8'>
        {sobre &&
          <><section className='flex flex-col items-start gap-2 w-[280px] md:w-[320px] lg:w-[470px] mb-8'>
            <h2 className='text-h2 mb-2'>SOBRE</h2>
            {sobre.aboutDescription.map((line, index) => <p key={index} className='text-level-1 font-normal'>{line}</p>)}
            
          </section>

            <section className='flex flex-col gap-8 md:gap-10'>
              <div className='flex flex-col w-[280px]'>
                <h2 className='text-h2 mb-4'>E-MAIL</h2>
                <a
                  href={`mailto:${sobre.emails[0]}`}
                  className='text-level-1 font-normal'
                  aria-label={`Email: ${sobre.emails[0]}`}
                >
                  {sobre.emails[0]}
                </a>
                <a
                  href={`mailto:${sobre.emails[1]}`}
                  className='text-level-1 font-normal'
                  aria-label={`Email: ${sobre.emails[1]}`}
                >
                  {sobre.emails[1]}
                </a>
              </div>
              <div className='flex flex-col w-[280px]'>
                <h2 className='text-h2 mb-4'>TELEFONE</h2>
                <a
                  href={`tel:${sobre.phoneNumbers}`}
                  className='text-level-1 font-normal'
                  aria-label={`Telefone: ${sobre.phoneNumbers}`}
                >
                  {sobre.phoneNumbers}
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
                  <address className='text-level-1 font-normal'>Rua Maria Stella de Almeida Moura, 57 - 2º andar - Centro</address>
                  <address className='text-level-1 font-normal'>CEP: 26700-000</address>
                </a>
              </div>
            </section></>

        }
      </div>

      <div className='bg-offwhite dark:bg-white w-[95%] flex items-center justify-center mx-auto h-[2px] mt-12 mb-10' />

      <Marquee />
    </footer >
  );
}

export default Footer;
