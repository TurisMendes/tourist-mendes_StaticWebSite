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
    title: 'Fomentador',
    src: './src/assets/logos/PrefeituraMendes.png'
  },
  {
    title: 'Fomentador',
    src: './src/assets/logos/PNAB.png'
  },
  {
    title: 'Fomentador',
    src: './src/assets/logos/GovernoFederal.png'
  },
]

const duplicatedLogos = [...logos, ...logos];

function Marquee(): React.ReactNode {

  return (
    <section className="w-full pb-10 mx-auto overflow-hidden">
      <motion.div
        className="w-full flex whitespace-nowrap gap-40"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "loop", ease: "linear" }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-40"
          >
            <div className='flex flex-col items-center justify-center gap-2'>
              {logo.title && (
                <p className="body-level-1 text-black dark:text-white">{logo.title}</p>
              )}
              <img
                src={logo.src}
                alt={logo.title}
                className="max-w-[300px] h-[80px] object-cover grayscale"
              />
            </div>
            <div className='w-[2px] h-20 bg-gray-200'/>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Marquee;
