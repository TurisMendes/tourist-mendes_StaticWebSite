import React from "react";
import { useTheme } from "../../../../hooks/useTheme";
import './AgenteCulturalContact.css';

interface Props {
  contacts: {
    phoneNumbers?: string[];
    emails?: string[];
    site?: string;
    address?: string;
  };
  socialMedias: {
    instagram?: string;
    facebooK?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  };
}

function AgenteCulturalContact({ contacts, socialMedias }: Props): React.ReactNode {
  const { isDarkMode } = useTheme();

  return (

    <div className="AgenteCulturalContact">
      <section className="AgenteCulturalContact__content mt-[50px] md:mt-[80px] md:pl-0">
        <h2 className="AgenteCulturalContact__title text-h2 mb-4 font-bold text-[24px] leading-[1.4] mb-[16px]">Contato</h2>

        <div className="AgenteCulturalContact__items flex flex-col gap-2">
          {contacts.phoneNumbers && (
            <div className="AgenteCulturalContact__phone-numbers flex flex-col">
              <p className="text-level-1 font-bold leading-[1.5] text-[16px]">Telefone</p>
              <article className="flex gap-2">
                <a
                  href={`tel:${contacts.phoneNumbers[0]}`}
                  className="text-level-1 font-normal"
                >
                  {contacts.phoneNumbers[0]}
                </a>
                {contacts.phoneNumbers.length > 1 && (
                  <>
                    <p className="text-black dark:text-white font-normal">/</p>
                    <a
                      href={`tel:${contacts.phoneNumbers[1]}`}
                      className="text-level-1 font-normal"
                    >
                      {contacts.phoneNumbers[1]}
                    </a>
                  </>
                )}
              </article>
            </div>
          )}

          {contacts.emails && (
            <div className="AgenteCulturalContact_emails flex flex-col">
              <p className="text-level-1 font-bold leading-[1.5] text-[16px]">Email</p>
              <article className="flex gap-2">
                <a
                  href={`mailto:${contacts.emails[0]}`}
                  className="text-level-1 font-normal"
                >
                  {contacts.emails[0]}
                </a>
                {contacts.emails.length > 1 && (
                  <>
                    <p className="text-black dark:text-white">|</p>
                    <a
                      href={`mailto:${contacts.emails[1]}`}
                      className="text-level-1 font-normal"
                    >
                      {contacts.emails[1]}
                    </a>
                  </>
                )}
              </article>
            </div>
          )}

          {contacts.site && (
            <div className="AgenteCulturalContact__site flex flex-col">
              <p className="text-level-1 font-bold leading-[1.5] text-[16px]">Site</p>
              <a
                href={contacts.site}
                target="_blank"
                rel="noreferrer"
                className="text-level-1 font-normal"
              >
                {contacts.site}
              </a>
            </div>
          )}

          <div className="AgenteCulturalContact__address flex flex-col xl:max-w-[420px]">
            <p className="text-level-1 font-bold leading-[1.5] text-[16px]">Endereço</p>
            <address className="text-level-1 not-italic font-normal">
              {contacts.address}
            </address>
          </div>
        </div>

        {isDarkMode ? (
                <div className="AgenteCulturalContact__social-medias-dark-mode flex mt-4 gap-2">
                {socialMedias.facebooK && (
                  <a className="AgenteCulturalContact__social-medias-dark-mode--facebook w-[32px] h-[32px]" href={socialMedias.facebooK}>
                    
                  </a>
                )}
      
                {socialMedias.instagram && (
                  <a className="AgenteCulturalContact__social-medias-dark-mode--instagram w-[32px] h-[32px]" href={socialMedias.instagram}>
      
                  </a>
                )}
      
                {socialMedias.whatsapp && (
                  <a className="AgenteCulturalContact__social-medias-dark-mode--whatsapp w-[32px] h-[32px]" href={socialMedias.whatsapp}>
      
                  </a>
                )}
      
                {socialMedias.twitter && (
                  <a className="AgenteCulturalContact__social-medias-dark-mode--twitter w-[32px] h-[32px]" href={socialMedias.twitter}>
      
                  </a>
                )}
      
                {socialMedias.tiktok && (
                  <a className="AgenteCulturalContact__social-medias-dark-mode--tiktok w-[32px] h-[32px]" href={socialMedias.tiktok}>
      
                  </a>
                )}
              </div>
        ) : (
          <div className="AgenteCulturalContact__social-medias-light-mode flex mt-4 gap-2">
          {socialMedias.facebooK && (
            <a className="AgenteCulturalContact__social-medias-light-mode--facebook w-[32px] h-[32px]" href={socialMedias.facebooK}>
              
            </a>
          )}

          {socialMedias.instagram && (
            <a className="AgenteCulturalContact__social-medias-light-mode--instagram w-[32px] h-[32px]" href={socialMedias.instagram}>

            </a>
          )}

          {socialMedias.whatsapp && (
            <a className="AgenteCulturalContact__social-medias-light-mode--whatsapp w-[32px] h-[32px]" href={socialMedias.whatsapp}>

            </a>
          )}

          {socialMedias.twitter && (
            <a className="AgenteCulturalContact__social-medias-light-mode--twitter w-[32px] h-[32px]" href={socialMedias.twitter}>

            </a>
          )}

          {socialMedias.tiktok && (
            <a className="AgenteCulturalContact__social-medias-light-mode--tiktok w-[32px] h-[32px]" href={socialMedias.tiktok}>

            </a>
          )}
        </div>
        )}

      </section>
    </div>

  );
}

export default AgenteCulturalContact;
