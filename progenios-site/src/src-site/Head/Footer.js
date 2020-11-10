// eslint-disable-next-line
import React, { useState } from 'react';
import LogoM from '../../img/MILOS_2.png';
import './FooterStyle.css';

import facebook from '../../img/Footer/facebook.png';
import instagram from '../../img/Footer/instagram.png';
import youtube from '../../img/Footer/youtube.png';
import twitter from '../../img/Footer/twitter.png';
import github from '../../img/Footer/github.png';
import linkedin from '../../img/Footer/linkedin.png';
import email from '../../img/Footer/outlook.png';

import useWindowDimensions from '../Outros/Dimensions';

function Footer(){
  const[BordaQS, setBordaQS] = useState('2px solid transparent')
  const[BordaC, setBordaC] = useState('2px solid transparent')

  const { height, width } = useWindowDimensions();

  if(width < 575){
    return(
      <div className="Footer" style={{height: 500, flexDirection: 'column'}}>
          <div className="Resumo" style={{height: '55%', width: '90%'}}>
            <img src={LogoM} style={{height: 45, width: 180, paddingLeft: 20, paddingTop: 30,}}/>
            <div className="ResumoTexto" style={{paddingBottom: 50}}>O Milos é uma Startup que tira proveito da tecnologia para transformar e remodelar a forma como as diversas problemáticas da sociedade são tratadas. Dessa maneira, esperamos obter resultados cada vez mais satisfatórios no desempenho de várias áreas como a da educação. 
            </div>
          </div>
  
          <div className="LinhaFooter" style={{height: 1, width: '80%'}}></div>
  
          <div className="SobreNos" style={{height: '45%', width: '90%'}}>
  
            <div style={{flexDirection: 'column',}}>
  
              <div className="RedesSociais" style={{width: '55%', marginLeft: 20,}}>
  
              <a href={'/'}>
                <img src={facebook} className="ImgFace" 
                style={{display: 'flex', width: '80%', height: 'auto',}}/>
              </a>
              <a href={'https://www.youtube.com/channel/UCnzyW455mo6l6o96tBAsq9Q/about'}>
                <img src={youtube} className="ImgYouT" style={{display: 'flex', width: '80%', 
                height: 'auto'}}/>
              </a>
              <a href={'https://www.instagram.com/milos.innovation/'}>
                <img src={instagram} className="ImgInsta" style={{display: 'flex', width: '80%',
                height: 'auto'}}/>
              </a>
              <a href={'https://twitter.com/InnovationMilos'}>
                <img src={twitter} className="ImgTwit" style={{display: 'flex', width: '80%',
                height: 'auto'}}/>
              </a>
              <a href={'/'}>
                <img src={github} className="ImgGit" style={{display: 'flex', width: '80%',
                height: 'auto'}}/>
              </a>
              <a href={'/'}>
                <img src={linkedin} className="ImgFace" style={{display: 'flex', width: '80%',
                height: 'auto'}}/>
              </a>
              
  
              </div>
  
  
              <div className="DivSobreNos" style={{ marginLeft: 28,}}>
  
              <a className="TextLinkFooter" href={'/quem-somos'} >
                  <text style={{borderBottom: BordaQS,}}
                  onMouseEnter={() => setBordaQS('2px solid #ff002a')} 
                  onMouseOut={() => setBordaQS('2px solid transparent')}
                  className="TextHeader">Quem Somos</text></a>
  
              {/*<a className="TextLinkFooter" href={'http://localhost:3000/contato'} >
                  <text style={{borderBottom: BordaC,}}
                  onMouseEnter={() => setBordaC('2px solid #ff002a')} 
                  onMouseOut={() => setBordaC('2px solid transparent')}
                  className="TextHeader">Contato</text></a>*/}
  
              </div>

              <div className="Email" 
              style={{width: 265, height: 'auto', marginTop: 20, marginLeft: 20}}>
                <img src={email} style={{width: 30, height: 'auto',}}/>
                <a style={{color: 'white', textDecoration: 'none'}} 
                href="mailto:milos.innovation@outlook.com">milos.innovation@outlook.com</a>
              </div>
  
            </div>
          </div>
  
      </div>
    )}

  else if(width < 750){
    return(
      <div className="Footer" style={{height: 350}}>
          <div className="Resumo" style={{height: '90%', width: '45%'}}>
            <img src={LogoM} style={{height: 45, width: 180, paddingLeft: 20, paddingTop: 30,}}/>
            <div className="ResumoTexto" style={{paddingBottom: 50}}>O Milos é uma Startup que tira proveito da tecnologia para transformar e remodelar a forma como as diversas problemáticas da sociedade são tratadas. Dessa maneira, esperamos obter resultados cada vez mais satisfatórios no desempenho de várias áreas como a da educação. 
            </div>
          </div>
  
          <div className="LinhaFooter" style={{height: '80%', width: 1}}></div>
  
          <div className="SobreNos" style={{height: '90%', width: '45%'}}>
  
            <div style={{flexDirection: 'column',}}>
  
              <div className="RedesSociais" style={{width: '75%'}}>
  
              <a href={'/'}>
                <img src={facebook} className="ImgFace" 
                style={{display: 'flex', width: '80%', height: 'auto',}}/>
              </a>
              <a href={'https://www.youtube.com/channel/UCnzyW455mo6l6o96tBAsq9Q/about'}>
                <img src={youtube} className="ImgYouT" style={{display: 'flex', width: '80%', 
                height: 'auto'}}/>
              </a>
              <a href={'https://www.instagram.com/milos.innovation/'}>
                <img src={instagram} className="ImgInsta" style={{display: 'flex', width: '80%',
                height: 'auto'}}/>
              </a>
              <a href={'https://twitter.com/InnovationMilos'}>
                <img src={twitter} className="ImgTwit" style={{display: 'flex', width: '80%',
                height: 'auto'}}/>
              </a>
              <a href={'/'}>
                <img src={github} className="ImgGit" style={{display: 'flex', width: '80%',
                height: 'auto'}}/>
              </a>
              <a href={'/'}>
                <img src={linkedin} className="ImgFace" style={{display: 'flex', width: '80%',
                height: 'auto'}}/>
              </a>
              
  
              </div>
  
  
              <div className="DivSobreNos">
  
              <a className="TextLinkFooter" href={'/quem-somos'} >
                  <text style={{borderBottom: BordaQS,}}
                  onMouseEnter={() => setBordaQS('2px solid #ff002a')} 
                  onMouseOut={() => setBordaQS('2px solid transparent')}
                  className="TextHeader">Quem Somos</text></a>
  
              {/*<a className="TextLinkFooter" href={'http://localhost:3000/contato'} >
                  <text style={{borderBottom: BordaC,}}
                  onMouseEnter={() => setBordaC('2px solid #ff002a')} 
                  onMouseOut={() => setBordaC('2px solid transparent')}
                  className="TextHeader">Contato</text></a>*/}
  
              </div>

              <div className="Email" style={{width: 255, height: 'auto', marginTop: 100,}}>
                <img src={email} style={{width: 30, height: 'auto',}}/>
                <a style={{color: 'white', textDecoration: 'none'}} 
                href="mailto:milos.innovation@outlook.com">milos.innovation@outlook.com</a>
              </div>
  
            </div>
          </div>
  
      </div>
    )}

  else if(width < 1000){
    return(
      <div className="Footer" style={{height: 350}}>
          <div className="Resumo" style={{height: '90%', width: '45%'}}>
            <img src={LogoM} style={{height: 45, width: 180, paddingLeft: 20, paddingTop: 30,}}/>
            <div className="ResumoTexto" style={{paddingBottom: 50}}>O Milos é uma Startup que tira proveito da tecnologia para transformar e remodelar a forma como as diversas problemáticas da sociedade são tratadas. Dessa maneira, esperamos obter resultados cada vez mais satisfatórios no desempenho de várias áreas como a da educação. 
            </div>
          </div>
  
          <div className="LinhaFooter" style={{height: '80%', width: 1}}></div>
  
          <div className="SobreNos" style={{height: '90%', width: '45%'}}>
  
            <div style={{flexDirection: 'column',}}>
  
              <div className="RedesSociais" style={{width: '62%'}}>
  
              <a href={'/'}>
                <img src={facebook} className="ImgFace" 
                style={{display: 'flex', width: '80%', height: 'auto',}}/>
              </a>
              <a href={'https://www.youtube.com/channel/UCnzyW455mo6l6o96tBAsq9Q/about'}>
                <img src={youtube} className="ImgYouT" style={{display: 'flex', width: '80%', 
                height: 'auto'}}/>
              </a>
              <a href={'https://www.instagram.com/milos.innovation/'}>
                <img src={instagram} className="ImgInsta" style={{display: 'flex', width: '80%',
                height: 'auto'}}/>
              </a>
              <a href={'https://twitter.com/InnovationMilos'}>
                <img src={twitter} className="ImgTwit" style={{display: 'flex', width: '80%',
                height: 'auto'}}/>
              </a>
              <a href={'/'}>
                <img src={github} className="ImgGit" style={{display: 'flex', width: '80%',
                height: 'auto'}}/>
              </a>
              <a href={'/'}>
                <img src={linkedin} className="ImgFace" style={{display: 'flex', width: '80%',
                height: 'auto'}}/>
              </a>
              
  
              </div>
  
  
              <div className="DivSobreNos">
  
              <a className="TextLinkFooter" href={'/quem-somos'} >
                  <text style={{borderBottom: BordaQS,}}
                  onMouseEnter={() => setBordaQS('2px solid #ff002a')} 
                  onMouseOut={() => setBordaQS('2px solid transparent')}
                  className="TextHeader">Quem Somos</text></a>
  
              {/*<a className="TextLinkFooter" href={'http://localhost:3000/contato'} >
                  <text style={{borderBottom: BordaC,}}
                  onMouseEnter={() => setBordaC('2px solid #ff002a')} 
                  onMouseOut={() => setBordaC('2px solid transparent')}
                  className="TextHeader">Contato</text></a>*/}
  
              </div>

              <div className="Email" style={{width: 265, height: 'auto', marginTop: 100,}}>
                <img src={email} style={{width: 30, height: 'auto',}}/>
                <a style={{color: 'white', textDecoration: 'none'}} 
                href="mailto:milos.innovation@outlook.com">milos.innovation@outlook.com</a>
              </div>
  
            </div>
          </div>
  
      </div>
    )}

  else{
  return(
    <div className="Footer" style={{height: 350}}>
        <div className="Resumo" style={{height: '90%', width: '45%'}}>
          <img src={LogoM} style={{height: 45, width: 180, paddingLeft: 20, paddingTop: 30,}}/>
          <div className="ResumoTexto" style={{paddingBottom: 50}}>O Milos é uma Startup que tira proveito da tecnologia para transformar e remodelar a forma como as diversas problemáticas da sociedade são tratadas. Dessa maneira, esperamos obter resultados cada vez mais satisfatórios no desempenho de várias áreas como a da educação. 
          </div>
        </div>

        <div className="LinhaFooter" style={{height: '80%', width: 1}}></div>

        <div className="SobreNos" style={{height: '90%', width: '45%'}}>

          <div style={{flexDirection: 'column',}}>

            <div className="RedesSociais" style={{width: '50%'}}>

            <a href={'/'}>
              <img src={facebook} className="ImgFace" 
              style={{display: 'flex', width: '80%', height: 'auto',}}/>
            </a>
            <a href={'https://www.youtube.com/channel/UCnzyW455mo6l6o96tBAsq9Q/about'}>
              <img src={youtube} className="ImgYouT" style={{display: 'flex', width: '80%', 
              height: 'auto'}}/>
            </a>
            <a href={'https://www.instagram.com/milos.innovation/'}>
              <img src={instagram} className="ImgInsta" style={{display: 'flex', width: '80%',
              height: 'auto'}}/>
            </a>
            <a href={'https://twitter.com/InnovationMilos'}>
              <img src={twitter} className="ImgTwit" style={{display: 'flex', width: '80%',
              height: 'auto'}}/>
            </a>
            <a href={'/'}>
              <img src={github} className="ImgGit" style={{display: 'flex', width: '80%',
              height: 'auto'}}/>
            </a>
            <a href={'/'}>
              <img src={linkedin} className="ImgFace" style={{display: 'flex', width: '80%',
              height: 'auto'}}/>
            </a>
            

            </div>


            <div className="DivSobreNos">

            <a className="TextLinkFooter" href={'/quem-somos'} >
                <text style={{borderBottom: BordaQS,}}
                onMouseEnter={() => setBordaQS('2px solid #ff002a')} 
                onMouseOut={() => setBordaQS('2px solid transparent')}
                className="TextHeader">Quem Somos</text></a>

            {/*<a className="TextLinkFooter" href={'http://localhost:3000/contato'} >
                <text style={{borderBottom: BordaC,}}
                onMouseEnter={() => setBordaC('2px solid #ff002a')} 
                onMouseOut={() => setBordaC('2px solid transparent')}
                className="TextHeader">Contato</text></a>*/}

            </div>
            
            <div className="Email" style={{width: 265, height: 'auto', marginTop: 100,}}>
              <img src={email} style={{width: 30, height: 'auto',}}/>
              <a style={{color: 'white', textDecoration: 'none'}} 
              href="mailto:milos.innovation@outlook.com">milos.innovation@outlook.com</a>
            </div>

          </div>
        </div>

    </div>
  )}
}

export default Footer;
