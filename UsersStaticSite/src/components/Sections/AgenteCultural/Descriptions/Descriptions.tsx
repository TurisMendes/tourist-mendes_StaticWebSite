import React from "react";

type Props = {
  aboutMeDescription: string[];
  myContributionsDescription: string[];
}

export const Descriptions: React.FC<Props> = ({ aboutMeDescription, myContributionsDescription }): React.ReactNode => {
  return (
    <div className="Description">
        <div className="Description__content">

          {aboutMeDescription && (
            <div className="Description__about-me text-black mt-[50px] md:mt-[80px]">
              <h2 className="Description__title text-h2 mb-[16px]">Sobre mim</h2>
              {aboutMeDescription.map((paragraph) => <p className="Description__text text-level-1 font-normal">{paragraph}</p>)}
            </div>
          )}

          {myContributionsDescription && (
            <div className="Description__my-contributions text-black mt-[50px] md:mt-[80px]">
              <h3 className="Description__title text-h2 mb-[16px]">Minhas contribuições</h3>
              {myContributionsDescription.map((paragraph) => <p className="Description__text text-level-1 font-normal">{paragraph}</p>)}
            </div>
          )}
        </div>
    </div>
  );
}