import React from 'react';
import Menu from '../Menu/Menu'

const Main = ( props ) => {
  return (
    <section>
      <Menu />

      {props.children}

    </section>
  );
};

export default Main;