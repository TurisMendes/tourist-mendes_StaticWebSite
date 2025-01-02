import React from 'react';
import ButtonCustom from '../ButtonCustom/ButtonCustom';

function Test(): React.ReactNode {

  return (
    <article className="m-5 gap-3 w-full flex" >
      <ButtonCustom variant='primary' text='Saiba mais' link=''/>
      <ButtonCustom variant='secondary' text='Exibir mais' link=''/>
    </article>
  );
}

export default Test;
