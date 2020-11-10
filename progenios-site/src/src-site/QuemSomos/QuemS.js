// eslint-disable-next-line
import React, { useState } from 'react';
import './QuemSStyle.css';
import { Link } from 'react-router-dom';

import Head from '../Head/Head';
import Footer from '../Head/Footer';

import quemSImg from '../../img/QuemS/quemSomos.png';
import MilosI from '../../img/QuemS/MILOS_Innovation2.png';

function Meio(){

  return(
    <div className= "MeioQuemS">
        
        <img src={quemSImg} style={{width: '100%', height: 'auto',}}></img>

        <div style={{height: 150, justifyContent: 'center', 
        marginTop: '9%', display: 'flex', position: "absolute"}}>
        <h style={{fontWeight: 'bold', fontSize: 60,}}>Quem Somos</h></div>

        <div className="LogoM">
          <div className="LogoMBefore" style={{borderLeft: '60px solid #ff002a',}}></div>
          <img src={MilosI} style={{width: '70%', height: 'auto'}}></img>
          <div className="LogoMAfter" style={{borderRight: '60px solid #ff002a',}}></div>
        </div>

        <div className="TextoQuemS">

          <div className="PTextoQuemS">
          A princípio, éramos apenas um grupo de amigos interessados por tecnologia, compartilhando ideias e desenvolvendo projetos; no entanto, o desejo de que as pessoas tivessem acesso às nossas ideias crescia. Propostas criativas capazes de sanar problemáticas da sociedade... Seria um desperdício mantê-las apenas no campo subjetivo, então porque não colocá-las em prática?
          </div>
          <br/>
          <div className="PTextoQuemS">
          Assim, ampliamos nossos horizontes fundando a startup Milos Innovation, com o intuito de contribuir com o desempenho individual e coletivo das pessoas de diferentes setores da sociedade, através de inovações tecnológicas. Acreditamos que a tecnologia não só é capaz de transformar vidas, como também desempenha um papel fundamental no dia a dia da população. Ou seja, somos uma equipe de desenvolvedores de projetos tecnológicos.
          </div>
          <br/>
          <div className="PTextoQuemS">
          Ademais, nosso propósito vai além da elaboração e execução de projetos. Viver em mundo cada vez mais modernizado exige mais qualificação do indivíduo, sendo assim, o Milos busca disseminar conhecimento, auxiliar e contribuir com a aprendizagem de pessoas inexperientes nesse ramo.
          </div>

        </div>

    </div>
  )
}

function QuemSomos() {
  return (
    <div>
      <Head/>
      <Meio/>
      <Footer/>
    </div>
  );
}

export default QuemSomos;
