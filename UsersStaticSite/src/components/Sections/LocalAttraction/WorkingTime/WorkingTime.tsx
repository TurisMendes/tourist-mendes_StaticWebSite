import React from 'react';

function WorkingTime(): React.ReactNode {

  return (
    <section className='pl-4 mt-12 flex flex-col gap-4 md:pl-0'>
      <h2 className='text-h2'>Funcionamento</h2>
      <div className='flex flex-col'>
        <p className='body-level-1'>De quinta a domingo das 9hs as 18hs.</p>
        <p className='body-level-1'>Somente visita agendada.</p>
      </div>
    </section>
  )
}

export default WorkingTime;