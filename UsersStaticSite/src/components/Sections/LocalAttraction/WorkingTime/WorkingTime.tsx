import React from 'react';

interface Props {
  text: string;
}

function WorkingTime({ text }: Props): React.ReactNode {

  return (
    <section className='pl-4 mt-12 flex flex-col gap-4 md:pl-0'>
      <h2 className='text-h2'>Funcionamento</h2>
      <div className='flex flex-col'>
        {text && (
          <p className='text-level-1'>{text}</p>

        )}
        <p className='text-level-1'>Somente visita agendada.</p>
      </div>
    </section>
  )
}

export default WorkingTime;