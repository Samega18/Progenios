// eslint-disable-next-line
import React, { useState } from 'react';
import LogoMilos from '../../img/MILOS_Imagem.png';
import Onda from '../../img/Home/ondaRed.png';
import LogoP from '../../img/ProgeniosLogo3.png';
import LogoM from '../../img/MILOS_2.png';
import Fundo from '../../img/Fundo.jpg';
import Node from '../../img/Home/node.png';
import Python from '../../img/Home/python.png';
import Npm from '../../img/Home/npm.png';
import Java from '../../img/Home/java.png';
import './HomeStyle.css';
import { Link } from 'react-router-dom';

import { FcNext, FcPrevious } from 'react-icons/fc';
import { GrNext, GrPrevious } from 'react-icons/gr';

import Head from '../Head/Head';
import Footer from '../Head/Footer';

import useWindowDimensions from '../Outros/Dimensions';

var Tec = <p style={{color:'#ff002a', fontWeight: 'bold',}}>&nbsp;TECNOLÓGICOS</p>

function Meio(){
  const[NextBt, setNextBt] = useState('transparent')
  const[PreviousBt, setPreviousBt] = useState('transparent')

  const { height, width } = useWindowDimensions();

  if(width < 575){
    return(
      <div className= "MeioHome">
      <div className="FotoHome">
        
        <img src={LogoMilos} style={{width: '100%', height: '100%',}}/>

      </div>
      <img src={Onda} style={{width: '100%', height: 50,}}/>
      <div className="PosFoto" style={{height: 200,}}>

        <div>{width}</div>
        <div className="LinhaRed" style={{width: '50%',}}></div>
        <p className="P1" style={{height: 40, fontSize: 30,}}>DESENVOLVEDORES DE PROJETOS TECNOLÓGICOS</p>
        <div className="LinhaRed" style={{width: '90%',}}></div>
        
      </div>
      <div className="PosFoto2">
        
        <div className="DivPosFoto2" style={{paddingLeft: '10px',}}>
          <div className="LinhaBlack"></div>
          <p className='P2' style={{fontSize: 20, paddingLeft: '5px',}}>
            Conheça as melhores tecnologias utilizadas na atualidade:</p>
        </div>

          <div className="Linhas">
            <div className="Linha1"/>
            <div className="Linha2"/>
            <div className="Linha3"/>
          </div>
      </div>

      <div className="PosFoto3" style={{height: '1370px', flexDirection: 'column'}}>
        <a href="/tecnologias/node" className="Conteudo"
        style={{width: '70%'}}>
          <img src={Node} style={{width: '100%',}}/>
          <p className="PConteudo">NodeJS: Ambiente de execução JavaScript</p>
        </a>
        <a href="/tecnologias/python" className="Conteudo"
        style={{width: '70%'}}>
          <img src={Python} style={{width: '100%',}}/>
          <p className="PConteudo">Python: Linguagem de Programação prática</p>
        </a>
        <a href="/tecnologias/npm" className="Conteudo"
        style={{width: '70%'}}>
          <img src={Npm} style={{width: '100%',}}/>
          <p className="PConteudo">NPM: Gerenciador de Pacotes do Node</p>
        </a>
      </div>

      <div className="PosFoto4" style={{height: '400px',}}>
        <p className='P3'>Projeto inovador para educação:</p>
        <div className="ProgeniosHome" style={{height: '350px',}}>
          <div className="DivRed" style={{height: '35%',}}></div>

          <div style={{display: 'flex', width: '70%', height: '100%', flexDirection: 'column', 
          justifyContent: 'center', paddingBottom: '70px',}}>
          <div style={{position: 'relative', fontWeight: 'bold', fontSize: 18,}}>
            <p>Venha conhecer nosso projeto!</p></div>
          <a 
          href="/projetos/progenios" 
          style={{width: '100%', height: 'auto', boxShadow: "6px 6px 6px #4F4F4F", borderRadius: 15,}}>
            <img src={LogoP} style={{width: '100%', height: '100%', borderRadius: 10,}}/>
          </a>
          </div>

          <div className="DivRed2" style={{height: '35%',}}></div>
        </div>
      </div>
      

    </div>
    )
  }

  else if(width < 950){
    return(
      <div className= "MeioHome">
      <div className="FotoHome">
        
        <img src={LogoMilos} style={{width: '100%', height: '100%',}}/>

      </div>
      <img src={Onda} style={{width: '100%', height: 75,}}/>
      <div className="PosFoto" style={{height: 250,}}>

        <div>{width}</div>
        <div className="LinhaRed" style={{width: 300,}}></div>
        <p className="P1" style={{height: 35, fontSize: 35,}}>DESENVOLVEDORES DE PROJETOS TECNOLÓGICOS</p>
        <div className="LinhaRed" style={{width: 550,}}></div>
        
      </div>
      <div className="PosFoto2">
        
        <div className="DivPosFoto2" style={{paddingLeft: '30px',}}>
          <div className="LinhaBlack"></div>
          <p className='P2' style={{fontSize: 22, paddingLeft: '5px',}}>
            Conheça as melhores tecnologias utilizadas na atualidade:</p>
        </div>

          <div className="Linhas">
            <div className="Linha1"/>
            <div className="Linha2"/>
            <div className="Linha3"/>
          </div>
      </div>

      <div className="PosFoto3" style={{height: '400px', flexDirection: 'row'}}>
        <a href="/tecnologias/node" className="Conteudo"
        style={{width: '30%'}}>
          <img src={Node} style={{width: '100%',}}/>
          <p className="PConteudo">NodeJS: Ambiente de execução JavaScript</p>
        </a>
        <a href="/tecnologias/python" className="Conteudo"
        style={{width: '30%'}}>
          <img src={Python} style={{width: '100%',}}/>
          <p className="PConteudo">Python: Linguagem de Programação prática</p>
        </a>
        <a href="/tecnologias/npm" className="Conteudo"
        style={{width: '30%'}}>
          <img src={Npm} style={{width: '100%',}}/>
          <p className="PConteudo">NPM: Gerenciador de Pacotes do Node</p>
        </a>
      </div>

      <div className="PosFoto4" style={{height: '550px',}}>
        <p className='P3'>Projeto inovador para educação:</p>
        <div className="ProgeniosHome" style={{height: '500px',}}>
          <div className="DivRed" style={{height: '40%',}}></div>

          <div style={{display: 'flex', width: '70%', height: '100%', flexDirection: 'column', 
          justifyContent: 'center', paddingBottom: '70px',}}>
          <div style={{position: 'relative', fontWeight: 'bold', fontSize: 18,}}>
            <p>Venha conhecer nosso projeto!</p></div>
          <a 
          href="/projetos/progenios" 
          style={{width: '100%', height: 'auto', boxShadow: "6px 6px 6px #4F4F4F", borderRadius: 15,}}>
            <img src={LogoP} style={{width: '100%', height: '100%', borderRadius: 10,}}/>
          </a>
          </div>

          <div className="DivRed2" style={{height: '40%',}}></div>
        </div>
      </div>
      

    </div>
    )
  }

  else{
  return(
    <div className= "MeioHome">
      <div className="FotoHome">
        
        <img src={LogoMilos} style={{width: '100%', height: '100%',}}/>

      </div>
      <img src={Onda} style={{width: '100%', height: 100,}}/>
      <div className="PosFoto" style={{height: 300,}}>

        <div>{width}</div>
        <div className="LinhaRed" style={{width: 400,}}></div>
        <p className="P1" style={{height: 40, fontSize: 40,}}>DESENVOLVEDORES DE PROJETOS TECNOLÓGICOS</p>
        <div className="LinhaRed" style={{width: 750,}}></div>
        
      </div>
      <div className="PosFoto2">
        
        <div className="DivPosFoto2" style={{paddingLeft: '50px',}}>
          <div className="LinhaBlack"></div>
          <p className='P2' style={{fontSize: 25, paddingLeft: '5px',}}>Conheça as melhores tecnologias utilizadas na atualidade:</p>
        </div>

          <div className="Linhas">
            <div className="Linha1"/>
            <div className="Linha2"/>
            <div className="Linha3"/>
          </div>
      </div>

      <div className="PosFoto3" style={{height: '550px', flexDirection: 'row'}}>
        <a href="/tecnologias/node" className="Conteudo"
        style={{width: '30%'}}>
          <img src={Node} style={{width: '100%',}}/>
          <p className="PConteudo">NodeJS: Ambiente de execução JavaScript</p>
        </a>
        <a href="/tecnologias/python" className="Conteudo"
        style={{width: '30%'}}>
          <img src={Python} style={{width: '100%',}}/>
          <p className="PConteudo">Python: Linguagem de Programação prática</p>
        </a>
        <a href="/tecnologias/npm" className="Conteudo"
        style={{width: '30%'}}>
          <img src={Npm} style={{width: '100%',}}/>
          <p className="PConteudo">NPM: Gerenciador de Pacotes do Node</p>
        </a>
      </div>

      <div className="PosFoto4" style={{height: '750px',}}>
        <p className='P3'>Projeto inovador para educação:</p>
        <div className="ProgeniosHome" style={{height: '700px',}}>
          <div className="DivRed" style={{height: '45%',}}></div>

          <div style={{display: 'flex', width: '60%', height: '100%', flexDirection: 'column', 
          justifyContent: 'center',  paddingBottom: '50px',}}>
          <div style={{position: 'relative', fontWeight: 'bold', fontSize: 18,}}>
            <p>Venha conhecer nosso projeto!</p></div>
          <a 
          href="/projetos/progenios" 
          style={{width: '100%', height: 'auto', boxShadow: "6px 6px 6px #4F4F4F", borderRadius: 15,}}>
            <img src={LogoP} style={{width: '100%', height: '100%', borderRadius: 10,}}/>
          </a>
          </div>

          <div className="DivRed2" style={{height: '45%',}}></div>
        </div>
      </div>
      

    </div>
  )}
}

function Home() {
  return (
    <div>
      <Head/>
      <Meio/>
      <Footer/>
    </div>
  );
}

export default Home;
