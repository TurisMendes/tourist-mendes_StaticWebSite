import React from "react";
import { motion } from "framer-motion";

const logos = [
  {
    title: 'Realização',
    src: './src/assets/logos/SomosDev.png'
  },
  {
    title: 'Idealização',
    src: './src/assets/logos/ColetivoCafeina.png'
  },
  {
    title: 'Fomentadores',
    src: [
      './src/assets/logos/PrefeituraMendes.png',
      './src/assets/logos/PNAB.png',
      './src/assets/logos/GovernoFederal.png'
    ]
  }
];


const duplicatedLogos = [...logos, ...logos, ...logos];

function Marquee(): React.ReactNode {

  return (
    <section className="w-full pb-10 overflow-hidden">
      <motion.div
        className="w-full flex whitespace-wrap"
        animate={{ x: [0, -1500] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "loop", ease: "linear" }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex flex-row items-center gap-24 ml-24">
            <div className="w-1 h-40 bg-gray-200" />
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-lg font-bold text-black dark:text-white text-center">{logo.title}</h2>

              <div className="flex flex-row">
                {Array.isArray(logo.src) ? (
                  <div className="flex flex-row items-center gap-8">
                    {logo.src.map((src, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={src}
                        alt={`${logo.title} ${imgIndex + 1}`}
                        className="max-w-[250px] h-[80px] object-cover grayscale"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={logo.src}
                    alt={logo.title}
                    className="max-w-[300px] h-[80px] object-cover grayscale"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section >
  );
}

export default Marquee;
