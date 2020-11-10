// eslint-disable-next-line
import React, { useState } from 'react';
import './PythonStyle.css';
import { Link } from 'react-router-dom';
import PythonCurto from '../../../img/Tecnologias/Python/PythonCurto.png';
import Onda from '../../../img/Tecnologias/Node/ondaGreen.png';
import Construcao from '../../../img/construcao.png';

import Head from '../../Head/Head';
import Footer from '../../Head/Footer';

function Salvar(){
  return(
      <div>
         <div className="C1">
          <div className="C1Texto"></div>
          <div className="DivVerde"></div>
        </div>

        <div className="C2">
          <div className="DivVerde2"></div>
          <div className="C2Texto"></div>
        </div>
      </div>
  )
}

function Meio(){
  const[NextBt, setNextBt] = useState('transparent')
  const[PreviousBt, setPreviousBt] = useState('transparent')

  return(
    <div className= "MeioPython">
      <img name="imagem-python" src={PythonCurto} style={{width: '100%', height: 'auto',}}/>
      <img name="imagem-python" src={Onda} style={{width: '100%', height: 100}}/>
      <div className="PythonC">
        
        <h style={{fontSize: 25,}}>Esta página está em construção</h>
        <img name="imagem-python" src={Construcao} style={{width: '30%', height: 'auto',}}/>

      </div>

    </div>
  )
}

function Python() {
  return (
    <div>
      <Head/>
      <Meio/>
      <Footer/>
    </div>
  );
}

export default Python;
