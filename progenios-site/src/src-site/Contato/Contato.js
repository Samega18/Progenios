// eslint-disable-next-line
import React, { useState } from 'react';
import './ContatoStyle.css';
import { Link } from 'react-router-dom';

import Head from '../Head/Head';
import Footer from '../Head/Footer';

import useWindowDimensions from '../Outros/Dimensions';

function Meio(){
  const { height, width } = useWindowDimensions();

  return(
    <div className= "MeioContato">
        <h style={{fontWeight: 'bold', fontSize: 50, position: 'relative',}}>Contato</h>
        <div>Comprimento: {width}</div>
        <div>Altura: {height}</div>
    </div>
  )
}

function Contato() {
  return (
    <div>
      <Head/>
      <Meio/>
      <Footer/>
    </div>
  );
}

export default Contato;
