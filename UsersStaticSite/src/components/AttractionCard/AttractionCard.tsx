import React from 'react';
import ButtonCustom from '../ButtonCustom/ButtonCustom';

function AttractionCard(): React.ReactNode {

  return (
    <article
      className="relative flex flex-col w-[280px] h-[446px] lg:w-[370px] lg:h-[592px] rounded-2xl gap-4 group transition-all duration-300"
      aria-labelledby="attraction-title"
    >
      <img
        src="./src/assets/images/image1.jpg"
        alt="Vista frontal da Estação Mendes, um marco histórico do túnel"
        className="w-full h-full object-cover rounded-2xl brightness-50 lg:brightness-75 lg:group-hover:brightness-50 transition duration-300"
      />
      <div className="flex flex-col w-52 absolute bottom-10 left-6 gap-5">
        <h2 id="attraction-title" className="font-inter font-bold leading-8 text-2xl text-white">
          Estação Mendes
        </h2>
        <span className="font-inter font-extralight text-base text-white hidden lg:group-hover:flex transition duration-300">
          Marco histórico do túnel
        </span>
        <ButtonCustom
          text="Saiba mais"
          variant="secondary"
          attraction="Estação Mendes"
        />
      </div>
    </article>
  );
}

export default AttractionCard;
