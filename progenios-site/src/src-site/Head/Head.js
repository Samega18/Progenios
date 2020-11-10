// eslint-disable-next-line
import React, { useState } from 'react';
import LogoP from '../../img/ProgeniosLogo3.png';
import LogoM from '../../img/MILOS_2.png';
import Fundo from '../../img/Fundo.jpg';
import './HeadStyle.css';
import { Link } from 'react-router-dom';

import DropDownP from './HomeDrop';

import useWindowDimensions from '../Outros/Dimensions';

function Head(){
  const[BordaPa, setBordaPa] = useState('2px solid #242424')
  const[BordaP, setBordaP] = useState('2px solid #242424')

  const { height, width } = useWindowDimensions();

  if(width < 550){
    return(
      <div className="HeaderS">
          <a href={'/'}><img src={LogoM} style={{height: 30, width: 120, paddingLeft: 10,}}/></a>

        <div className="HeaderS2">
          <div className="HeaderS3" style={{width: '65%',}}>

            <DropDownP/>

            <a href={'/tecnologias'}  className="TextLink" >
              <text style={{borderBottom: BordaP,}}
              onMouseEnter={() => setBordaP('2px solid #ff002a')} 
              onMouseOut={() => setBordaP('2px solid #242424')}
              className="TextHeader">Tecnologias</text></a>  

          </div>
        </div>
      </div>
    )
  }

  else if(width < 750){
    return(
      <div className="HeaderS">
          <a href={'/'}><img src={LogoM} style={{height: 30, width: 120, paddingLeft: 10,}}/></a>

        <div className="HeaderS2">
          <div className="HeaderS3" style={{width: '50%',}}>

            <DropDownP/>

            <a href={'/tecnologias'}  className="TextLink" >
              <text style={{borderBottom: BordaP,}}
              onMouseEnter={() => setBordaP('2px solid #ff002a')} 
              onMouseOut={() => setBordaP('2px solid #242424')}
              className="TextHeader">Tecnologias</text></a>  

          </div>
        </div>
      </div>
    )
  }

  else if(width < 950){
    return(
      <div className="HeaderS">
          <a href={'/'}><img src={LogoM} style={{height: 30, width: 120, paddingLeft: 10,}}/></a>

        <div className="HeaderS2">
          <div className="HeaderS3" style={{width: '35%',}}>

            <DropDownP/>

            <a href={'/tecnologias'}  className="TextLink" >
              <text style={{borderBottom: BordaP,}}
              onMouseEnter={() => setBordaP('2px solid #ff002a')} 
              onMouseOut={() => setBordaP('2px solid #242424')}
              className="TextHeader">Tecnologias</text></a>  

          </div>
        </div>
      </div>
    )
  }

  else{
    return(
      <div className="HeaderS">
          <a href={'/'}><img src={LogoM} style={{height: 30, width: 120, paddingLeft: 10,}}/></a>

        <div className="HeaderS2">
          <div className="HeaderS3" style={{width: '25%',}}>

            <DropDownP/>

            <a href={'/tecnologias'}  className="TextLink" >
              <text style={{borderBottom: BordaP,}}
              onMouseEnter={() => setBordaP('2px solid #ff002a')} 
              onMouseOut={() => setBordaP('2px solid #242424')}
              className="TextHeader">Tecnologias</text></a>  

          </div>
        </div>
      </div>
    )
  }
}

export default Head;
