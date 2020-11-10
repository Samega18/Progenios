// eslint-disable-next-line
import React, { useState } from 'react';
import LogoP from '../../img/ProgeniosLogo3.png';
import LogoM from '../../img/MILOS_2.png';
import Fundo from '../../img/Fundo.jpg';
import NomeP from '../../img/LogoOficial.png';
import Gif from '../../img/progamandasso.gif';
import './ProjetosStyle.css';
import { Link } from 'react-router-dom';

import ProjetosL from '../../img/Projetos/projetos.png';
import Einstein from '../../img/Projetos/AlbertEinstein2.png';
import Dali from '../../img/Projetos/SalvadorDali2.png';

import { FcNext, FcPrevious } from 'react-icons/fc';
import { GrNext, GrPrevious } from 'react-icons/gr';

import Head from '../Head/Head';
import Footer from '../Head/Footer';

import projetosImg from '../../img/Projetos/projetos2.png';

import useWindowDimensions from '../Outros/Dimensions';

function Meio(){
  const[NextBt, setNextBt] = useState('transparent')
  const[PreviousBt, setPreviousBt] = useState('transparent')

  const { height, width } = useWindowDimensions();

  if(width < 575){
    return(
    <div className= "MeioProjetos" style={{height: 650,}}>
      
      <img src={projetosImg} style={{width: '100%', height: 'auto',}}></img>

      <div style={{height: 150, justifyContent: 'center', 
      marginTop: '10%', display:"flex", position: 'absolute'}}>
        <h style={{fontWeight: 'bold', fontSize: 40,}}>Projetos</h></div>
       
       {/*<div style={{width: '50%', height: 275, position: 'relative',}}>
        <img src={ProjetosL} style={{width: '100%', height: '100%',}}/></div>*/}

      <div className="MeioProjImgs" style={{height: 550,}}>
        <a className="ProjetosFundo" style={{flexDirection: 'column', alignItems: "center", 
        justifyContent: "center"}}
        href="http://localhost:3000/projetos/progenios">

          <img src={LogoP} style={{width: '100%', height: 'auto',}}></img>
          
          <div style={{display: 'flex', width: '100%', flexDirection: 'row', 
          alignItems: "flex-end", justifyContent: "center"}}>
          <img src={Einstein} style={{width: '40%', height: 'auto',}}></img>
          <img src={Dali} style={{width: '40%', height: 'auto',}}></img>
          </div>

        </a>
      </div>

      {/*<img 
        src={Gif}  
        style={{width: '30%', height: 'auto' }} 
      />*/}

    </div>
  )}

  else if(width < 750){
    return(
    <div className= "MeioProjetos" style={{height: 850,}}>

      <img src={projetosImg} style={{width: '100%', height: 'auto',}}></img>

      <div style={{height: 150, justifyContent: 'center', 
      marginTop: '10%', display:"flex", position: 'absolute'}}>
        <h style={{fontWeight: 'bold', fontSize: 50,}}>Projetos</h></div>
       
       {/*<div style={{width: '50%', height: 275, position: 'relative',}}>
        <img src={ProjetosL} style={{width: '100%', height: '100%',}}/></div>*/}

        <div className="MeioProjImgs" style={{height: 650,}}>
          <a className="ProjetosFundo" style={{flexDirection: 'column', alignItems: "center", 
          justifyContent: "center"}}
          href="http://localhost:3000/projetos/progenios">

            <img src={LogoP} style={{width: '100%', height: 'auto',}}></img>
            
            <div style={{display: 'flex', width: '100%', flexDirection: 'row', 
            alignItems: "flex-end", justifyContent: "center"}}>
              <img src={Einstein} style={{width: '40%', height: 'auto',}}></img>
              <img src={Dali} style={{width: '40%', height: 'auto',}}></img>
            </div>

          </a>
        </div>

      {/*<img 
        src={Gif}  
        style={{width: '30%', height: 'auto' }} 
      />*/}

    </div>
  )}

  else if(width < 1000){
    return(
    <div className= "MeioProjetos" style={{height: 550,}}>

      <img src={projetosImg} style={{width: '100%', height: 'auto',}}></img>

      <div style={{height: 150, justifyContent: 'center', 
      marginTop: '10%', display:"flex", position: 'absolute'}}>
        <h style={{fontWeight: 'bold', fontSize: 55,}}>Projetos</h></div>
       
       {/*<div style={{width: '50%', height: 275, position: 'relative',}}>
        <img src={ProjetosL} style={{width: '100%', height: '100%',}}/></div>*/}

      <div className="MeioProjImgs" style={{height: 350,}}>
      <a className="ProjetosFundo" href="http://localhost:3000/projetos/progenios">

        <img src={Einstein} style={{width: '20%', height: 'auto',}}></img>
        <img src={LogoP} style={{width: '49.5%', height: 'auto',}}></img>
        <img src={Dali} style={{width: '20%', height: 'auto',}}></img>

      </a>
      </div>

      {/*<img 
        src={Gif}  
        style={{width: '30%', height: 'auto' }} 
      />*/}

    </div>
  )}

  else{
    return(
    <div className= "MeioProjetos" style={{height: 850,}}>

      <img src={projetosImg} style={{width: '100%', height: 'auto',}}></img>

      <div style={{height: 150, justifyContent: 'center', 
      marginTop: '10%', display:"flex", position: 'absolute'}}>
        <h style={{fontWeight: 'bold', fontSize: 60,}}>Projetos</h></div>
       
       {/*<div style={{width: '50%', height: 275, position: 'relative',}}>
        <img src={ProjetosL} style={{width: '100%', height: '100%',}}/></div>*/}

      <div className="MeioProjImgs" style={{height: 500,}}>
        <a className="ProjetosFundo" href="http://localhost:3000/projetos/progenios">

          <img src={Einstein} style={{width: '20%', height: 'auto',}}></img>
          <img src={LogoP} style={{width: '49.5%', height: 'auto',}}></img>
          <img src={Dali} style={{width: '20%', height: 'auto',}}></img>

        </a>
      </div>

      {/*<img 
        src={Gif}  
        style={{width: '30%', height: 'auto' }} 
      />*/}

    </div>
  )}
}

function Projetos() {
  return (
    <div>
      <Head/>
      <Meio/>
      <Footer/>
    </div>
  );
}

export default Projetos;
