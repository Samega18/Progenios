// eslint-disable-next-line
import React, { useState } from 'react';
import './ProgramacoesStyle.css';
import { Link } from 'react-router-dom';
import Tecnologias from '../../img/Tecnologias/tecnologias2.gif'
import NodeCurto from '../../img/Tecnologias/Node/NodeCurto.png'
import PythonCurto from '../../img/Tecnologias/Python/PythonCurto.png'
import NpmCurto from '../../img/Tecnologias/Npm/NpmCurto.png'
import Sakura from '../../img/sakura.png'

import Head from '../Head/Head';
import Footer from '../Head/Footer';

import useWindowDimensions from '../Outros/Dimensions';

function Meio(){
  const[NextBt, setNextBt] = useState('transparent')
  const[PreviousBt, setPreviousBt] = useState('transparent')

  const { height, width } = useWindowDimensions();

  if(width < 575){
    return(
    <div className= "MeioProgramacoes" style={{height: 650,}}>
      
      <img src={Tecnologias} style={{width: '100%', height: 'auto',}}></img>

      <div style={{height: 150, justifyContent: 'center', 
      marginTop: '6%', display:"flex", position: "absolute"}}>
        <h style={{fontWeight: 'bold', fontSize: 40,}}>Tecnologias</h></div>

      <div className="MeioTecImgs" style={{height: 470}}>
      <a className="ProgramacoesFundo" href="/tecnologias/node">
        <img src={NodeCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

      </a>

      <a className="ProgramacoesFundo" href="/tecnologias/python">
        <img src={PythonCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

      </a>

      <a className="ProgramacoesFundo" href="/tecnologias/npm">
        <img src={NpmCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

      </a>
      </div>

    </div>
  )}

  else if(width < 750){
    return(
    <div className= "MeioProgramacoes" style={{height: 850,}}>
      
      <img src={Tecnologias} style={{width: '100%', height: 'auto',}}></img>

      <div style={{height: 150, justifyContent: 'center', 
      marginTop: '7%', display:"flex", position: "absolute"}}>
        <h style={{fontWeight: 'bold', fontSize: 50,}}>Tecnologias</h></div>

        
      <div className="MeioTecImgs" style={{height: 670}}>
        <a className="ProgramacoesFundo" href="/tecnologias/node">
          <img src={NodeCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

        </a>

        <a className="ProgramacoesFundo" href="/tecnologias/python">
          <img src={PythonCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

        </a>

        <a className="ProgramacoesFundo" href="/tecnologias/npm">
          <img src={NpmCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

        </a>
      </div>

    </div>
  )}

  else if(width < 1000){
    return(
    <div className= "MeioProgramacoes" style={{height: 1000,}}>
      
      <img src={Tecnologias} style={{width: '100%', height: 'auto',}}></img>

      <div style={{height: 150, justifyContent: 'center', 
      marginTop: '8%', display:"flex", position: "absolute"}}>
        <h style={{fontWeight: 'bold', fontSize: 55,}}>Tecnologias</h></div>

        
      <div className="MeioTecImgs" style={{height: 820}}>
        <a className="ProgramacoesFundo" href="/tecnologias/node">
          <img src={NodeCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

        </a>

        <a className="ProgramacoesFundo" href="/tecnologias/python">
          <img src={PythonCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

        </a>

        <a className="ProgramacoesFundo" href="/tecnologias/npm">
          <img src={NpmCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

        </a>
      </div>

    </div>
  )}

  else if(width < 1250){
    return(
    <div className= "MeioProgramacoes" style={{height: 1300,}}>
      
      <img src={Tecnologias} style={{width: '100%', height: 'auto',}}></img>

      <div style={{height: 150, justifyContent: 'center', 
      marginTop: '8%', display:"flex", position: "absolute"}}>
        <h style={{fontWeight: 'bold', fontSize: 55,}}>Tecnologias</h></div>

        
      <div className="MeioTecImgs" style={{height: 1120}}>
        <a className="ProgramacoesFundo" href="/tecnologias/node">
          <img src={NodeCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

        </a>

        <a className="ProgramacoesFundo" href="/tecnologias/python">
          <img src={PythonCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

        </a>

        <a className="ProgramacoesFundo" href="/tecnologias/npm">
          <img src={NpmCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

        </a>
      </div>

    </div>
  )}

  else{
    return(
    <div className= "MeioProgramacoes" style={{height: 1500,}}>

      <img src={Tecnologias} style={{width: '100%', height: 'auto',}}></img>

      <div style={{height: 150, justifyContent: 'center', 
      marginTop: '10%', display:"flex", position: "absolute"}}>
        <h style={{fontWeight: 'bold', fontSize: 60,}}>Tecnologias</h></div>

      <div className="MeioTecImgs" style={{height: 1320}}>
      
        <a className="ProgramacoesFundo" href="/tecnologias/node">
          <img src={NodeCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

          {/*<div className="ProgramacoesTexto">
              <p className='ProgramacoesTextoP'>Você já deve saber o que é JavaScript e tudo que ele é capaz 
              de fazer não é?</p>
              
              <p className='ProgramacoesTextoP'>Mas, aposto que não sabia, que, no começo, ele só funcionava 
              em navegadores e que não era possivel executa-lo no computador, 
              para resolver essa limitação o NodeJS foi criado.</p>
              
              <p className='ProgramacoesTextoP'>O Node.JS faz com que o nosso amado JavaScript rode com total 
                  eficência no seu computador, sem precisar de um browser ou sacrificar o 
                  processamento para fazer isso.  Ele já é muito utilizado por grandes empresas como 
                  a Netflix e o Uber e vem ganhando cada vez mais espaço na área da tecnologia.</p>
            </div>*/}
          {/*<div style={{width: '50%', height: 300, position: 'fixed', right: -100,}}>
            <img src={Sakura} style={{width: '100%', height: '100%',}}/></div>*/}

        </a>


        <a className="ProgramacoesFundo" href="/tecnologias/python">
          <img src={PythonCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

        </a>

        <a className="ProgramacoesFundo" href="/tecnologias/npm">
          <img src={NpmCurto} style={{width: '100%', height: '100%', borderRadius: 15,}}/>

        </a>
      </div>

    </div>
  )}
}

function Programacoes() {
  return (
    <div>
      <Head/>
      <Meio/>
      <Footer/>
    </div>
  );
}

export default Programacoes;
