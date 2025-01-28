import React from 'react';
import WorkingTime from '../WorkingTime/WorkingTime';
import AttractionContact from '../AttractionContact/AttractionContact';

function AttractionDescription(): React.ReactNode {

  return (
    <section className=' px-4 flex flex-col gap-12 md:px-8 lg:px-0 md:items-start md:justify-center md:mx-auto lg:mx-0'>
      <section className='max-w-[335px] flex flex-col gap-4 md:max-w-[770px] lg:max-w-[944px] xl:max-w-[530px]'>
        <h2 className='text-h2 text-black'>Descrição</h2>
        <p className='body-level-1 font-normal'>A Fazenda Santa Rita, localizada a 92 km do Rio de Janeiro, é uma antiga fazenda de café, situada a 446 metros de altitude. Originalmente possuía uma grande casa e uma cascata para fornecer água potável. Após o ciclo do café, foi transformada no Santa Rita Hotel, cujas ruínas ainda existem.</p>
        <p className='body-level-1 font-normal'>Hoje, a fazenda ocupa 140 hectares e é ideal para ecoturismo e projetos de cultivo. Está a 3 km de estradas pavimentadas e possui fácil acesso, sendo uma ótima opção para uma vida tranquila e próxima a importantes cidades da região.</p>
      </section>

      <section className='max-w-[335px] flex flex-col gap-4 md:max-w-[770px] lg:max-w-[944px] xl:max-w-[530px]'>
        <h2 className='text-h2 text-black'>Informações históricas</h2>
        <p className='body-level-1 font-normal'>Durante o período colonial, a região do Vale do Paraíba era habitada por indígenas e servia como rota de transporte de ouro e, posteriormente, de café. Após a independência, fazendas de café surgiram, impulsionando a economia local e utilizando mão de obra escrava.</p>
        <p className='body-level-1 font-normal'>Com o fim da escravidão, o governo incentivou a imigração europeia. O café foi o principal motor econômico da região e do Brasil, transformando o Vale do Paraíba em um importante centro de produção até a crise de 1929, que marcou o declínio da cafeicultura.</p>
      </section>

      <section className='hidden xl:flex flex-col'>
        <WorkingTime />
        <AttractionContact />
      </section>
    </section>
  )

}


export default AttractionDescription;