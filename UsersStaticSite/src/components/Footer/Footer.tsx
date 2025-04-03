import React, { useEffect, useState } from "react";
import { AboutSessionData } from "../../shared-lib/typesHomePage";

function Footer(): React.ReactNode {
  const [sobre, setSobre] = useState<undefined | AboutSessionData>(undefined);

  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((response) => {
        const sobre = response as AboutSessionData;
        setSobre(sobre);
      });
  }, []);

  const handleAnoAtual = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="Footer bg-primary">
      <div className="Footer__content mt-[50px] md:mt-[80px]">
        <div className="app-container">
          <div className="Footer__top-part flex flex-col md:flex-row max-w-7xl mx-auto py-[50px] md:py-20 items-start justify-start md:gap-16 lg:gap-[150px]">
            {sobre && (
              <>
                <section className="Footer__about flex flex-col items-start gap-2 w-full md:max-w-[353px] lg:max-w-[495px]">
                  <h2 className="Footer__about-title text-h2 leading-[1.4] text-neutralGrey md:mb-4">SOBRE</h2>
                  {sobre.aboutDescription.map((line, index) => (
                    <p key={index} className="text-level-1 text-[16px] font-normal leading-[1.5] md:tracking-[0.02px] text-neutralGrey">
                      {line}
                    </p>
                  ))}
                </section>

                <section className="Footer__contacts-wrapper flex flex-col gap-8 md:gap-10 lg:max-w-[495px]">
                  <div className="Footer_email w-full flex flex-col mt-[32px] md:mt-0">
                    <h2 className="Footer__email-title leading-[1.4] text-h2 mb-2 text-neutralGrey md:mb-4">E-MAIL</h2>
                    <a
                      href={`mailto:${sobre.emails[0]}`}
                      className="Footer__email-item text-level-1 font-light text-neutralGrey dark:text-neutralGrey leading-6"
                      aria-label={`Email: ${sobre.emails[0]}`}
                    >
                      {sobre.emails[0]}
                    </a>
                    <a
                      href={`mailto:${sobre.emails[1]}`}
                      className="Footer__email-item text-level-1 font-light text-neutralGrey dark:text-neutralGrey leading-6 mt-[8px]"
                      aria-label={`Email: ${sobre.emails[1]}`}
                    >
                      {sobre.emails[1]}
                    </a>
                  </div>
                  <div className="Footer__tel flex flex-col w-[280px]">
                    <h2 className="Footer__tel-title leading-[1.4] text-h2 mb-2 text-neutralGrey md:mb-4">TELEFONE</h2>
                    <a
                      href={`tel:${sobre.phoneNumbers}`}
                      className="Footer__tel-item text-level-1 font-light text-neutralGrey dark:text-neutralGrey leading-6"
                      aria-label={`Telefone: ${sobre.phoneNumbers}`}
                    >
                      {sobre.phoneNumbers}
                    </a>
                  </div>
                  <div className="Footer__address flex flex-col w-full lg:w-[400px] xl:w-full">
                    <h2 className="Footer__address-title leading-[1.4] text-h2 mb-2 text-neutralGrey md:mb-4">ENDEREÇO</h2>
                    <a
                      href="https://maps.app.goo.gl/SkDHrywTBv2hhYRY9"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Endereço: Rua Maria Stella de Almeida Moura, 57 - 2º andar - Centro. CEP: 26700-000"
                    >
                      <address className="text-level-1 font-light not-italic text-neutralGrey dark:text-neutralGrey leading-6">
                        Rua Maria Stella de Almeida Moura, 57 - 2º andar - Centro
                      </address>
                      <address className="text-level-1 not-italic font-light text-neutralGrey dark:text-neutralGrey leading-6 mt-[8px]">
                        CEP: 26700-000
                      </address>
                    </a>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>

        <div className="Footer__divisor bg-offwhite dark:bg-white w-full flex items-center justify-center h-[1px]"  style={{backgroundColor: '#D1D1D1'}}/>

        <div className="app-container">
          <section className="Footer__bottom-part w-full mt-[50px] pb-4 gap-8 flex flex-col items-center justify-center md:mt-[16px] xl:flex-row xl:gap-[200px]">
            <div className="Footer__bottom-part-infos w-fit flex flex-col items-center justify-center gap-4 md:gap-16 md:flex-row xl:gap-14">
  
              <div className="w-full flex items-start justify-center gap-[48px] xl:justify-start xl:gap-14">
                <div className="w-fit flex flex-col items-center justify-between gap-2 md:w-28">
                  <p className="text-level-2 text-[12px] leading-[1.5] text-neutralGrey font-normal dark:text-neutralGrey">
                    Realização
                  </p>
                  <img
                    src="/logos/SomosDev.svg"
                    alt="Logo SomosDev"
                    className="h-[32px] object-cover"
                  />
                </div>
                <div className="w-fit flex flex-col items-center justify-between gap-2 md:w-16">
                  <p className="text-level-2 text-[12px] leading-[1.5] text-neutralGrey font-normal dark:text-neutralGrey">
                    Idealização
                  </p>
                  <img
                    src="/logos/ColetivoCafeina.svg"
                    alt="Logo Coletivo Cafeina"
                    className="h-[32px] object-cover"
                  />
                </div>
              </div>

              <div className="w-[300px] flex flex-col items-center justify-evenly gap-2">
                <p className="text-level-2 text-[12px] leading-[1.5] text-neutralGrey font-normal dark:text-neutralGrey">
                  Fomentadores
                </p>
                <div className="w-full flex items-center justify-center gap-[16px]">
                  <div className="w-24 md:w-32">
                    <img
                      src="/logos/PrefeituraMendes.svg"
                      alt="Logo Prefeitura de Mendes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-16 md:w-24">
                    <img
                      src="/logos/PNAB.svg"
                      alt="Logo PNAB"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-16 md:w-24">
                    <img
                      src="/logos/GovernoFederal.svg"
                      alt="Logo Governo Federal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>

            <p className="text-level-2 font-normal leading-[1.5] text-neutralGrey">
              © TurisMendes {handleAnoAtual()}. Todos os direitos reservados.
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;