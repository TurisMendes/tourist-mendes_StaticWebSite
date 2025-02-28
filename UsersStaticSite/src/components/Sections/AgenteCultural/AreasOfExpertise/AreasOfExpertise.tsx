import React from "react";

type Props = {
  tags: string[];
}

export const AreasOfExpertise: React.FC<Props> = ({ tags }): React.ReactNode => {
  return (
    <div className="AreasOfExpertise">
      <div className="AreasOfExpertise__content">
        {tags && (
          <div className="AreasOfExpertise__infos-wrapper text-black dark:text-white mt-[50px] md:mt-[80px]">
            <h2 className="AreasOfExpertise__title font-bold text-[24px] leading-[1.4]">
              Áreas de atuação
            </h2>
            <div className="AreasOfExpertise__tags-wrapp flex flex-wrap gap-[8px] mt-[16px]">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  className="AreasOfExpertise__tags font-bold pt-[4px] pb-[4px] px-[12px] 
                             border border-primary dark:border-secondary 
                             text-primary dark:text-secondary rounded-[32px]"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};