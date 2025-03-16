import React from "react";
import { ImageData } from "../../../../shared-lib/typesHomePage";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

interface Props {
  coverImageData: ImageData;
  profileImageData: ImageData;
  name: string;
  category: string;
}

export const Hero: React.FC<Props> = ({ coverImageData, profileImageData, name, category }): React.ReactNode => {

  return (
    <div className="Hero relative h-[610px] md:h-[529px] lg:h-[532px] mt-[80px]">
      <section className="Hero__content w-full flex flex-col items-start justify-center">
        <div className="Hero__liner absolute top-0 left-0 w-full h-[106px] bg-gradient-to-b from-white/80 via-white/40 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent z-10"></div>


        <img
          className="Hero__coverImage w-full h-[400px] object-cover"
          src={coverImageData ? coverImageData.imageUrl : ""}
          alt={coverImageData?.altDescription}
        />

        <div className="Hero__breadcrumb w-full absolute top-0 z-20">
          <Breadcrumb title={name} />
        </div>

        <div className="app-container relative h-[210px] md:h-[129px] flex justify-center">
          <div className="Hero__infos--wrapper w-full border-box absolute flex flex-col items-center justify-center bottom-0 left-0 md:flex-row md:left-[32px] md:w-[calc(100%-32px)] xl:left-[4px] xl:w-[calc(100%-4px)]">
            <img className="Hero__profile-image w-[168px] h-[168px] rounded-full object-cover border-1 border-[#F0F4F5]" src={profileImageData.imageUrl} alt={profileImageData.altDescription} />

            <div className="Hero__datas-wrapper w-full flex flex-col items-center justify-center md:items-start md:mt-[28px] md:ml-[16px]">
              <h1 className="Hero__title text-h1 text-black leading-[1.4] font-bold pt-[4px] text-[32px]">{name}</h1>
              <h4 className="Hero__category text-level-1-category mt-[4px]">{category}</h4>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
