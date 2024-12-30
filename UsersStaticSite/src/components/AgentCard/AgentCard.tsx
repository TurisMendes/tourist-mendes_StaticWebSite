import React from 'react';

function AgentCard(): React.ReactNode {
  return (
    <a href='#' className="w-fit h-full relative group transition-all duration-300">
      <img src="./src/assets/images/image2.jpg" alt="Agente Cultural"
        className='w-[280px] h-[370px] lg:w-[370px] object-cover rounded-2xl brightness-50 lg:brightness-75 lg:group-hover:brightness-50 transition duration-300' />
      <div className='absolute bottom-10 left-5 w-60'>
        <h3 className='text-white font-inter font-bold text-xl leading-8'>Pedro da Silva</h3>
        <p className='text-white font-inter font-extralight leading-6 lg:hidden group-hover:flex transition'>Texto de até 3 linhas descrevendo um pouco sobre o agente cultural</p>
      </div>
    </a>
  );
}

export default AgentCard;
