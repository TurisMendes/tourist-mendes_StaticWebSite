import React from "react";
import ButtonCustom from "../../../ButtonCustom/ButtonCustom";

interface Props {
  link: string;
}

function Tour360({ link }: Props): React.ReactNode {
  return (
    <section className="flex flex-col items-start justify-center px-4 gap-4 md:px-0 lg:px-0">
      <h2 className="text-h2">Tour 360</h2>
      <p className="text-level-1 font-normal max-w-[354px] md:max-w-[770px] lg:max-w-[950px] xl:max-w-[540px]">
        Um tour 360 é uma experiência virtual que permite você explorar um
        ambiente como se estivesse lá, vendo tudo ao redor em todas as direções.
        É como fazer uma visita real, mas de forma online e interativa!
      </p>
      <ButtonCustom
        text="Explorar em 360º"
        variant="primary"
        link={link}
        width="button-large"
      />
    </section>
  );
}

export default Tour360;
