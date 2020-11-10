// eslint-disable-next-line
import React, { useState } from 'react';
import LogoP from '../../../img/Projetos/Progenios/progeniosHead.png';
import onda from '../../../img/Projetos/Progenios/ondaBlue.png';
import LogoM from '../../../img/MILOS_2.png';
import Fundo from '../../../img/Fundo.jpg';
import NomeP from '../../../img/LogoOficial.png';
import './ProgeniosStyle.css';
import {myFunction, TrocaDivAnim} from './ProgeniosDados.js';
import { Link } from 'react-router-dom';

import { FcNext, FcPrevious } from 'react-icons/fc';
import { GrNext, GrPrevious } from 'react-icons/gr';

import VR from '../../../img/Projetos/Progenios/VR.png';
import AR from '../../../img/Projetos/Progenios/AR.png';
import CA from '../../../img/Projetos/Progenios/CA.png';
import MM from '../../../img/Projetos/Progenios/MM.png';
import VA from '../../../img/Projetos/Progenios/VA.png';

import Head from '../../Head/Head';
import Footer from '../../Head/Footer';

function Meio(){

  const[TamVr, setTamVr] = useState('20%')
  const[TamAr, setTamAr] = useState('20%')
  const[TamCa, setTamCa] = useState('20%')
  const[TamMm, setTamMm] = useState('20%')
  const[TamVa, setTamVa] = useState('20%')
  
  const[LeftAnim, setLeftAnim] = useState('48.25%')

  return(
    <div className= "MeioProgenios">

      <link href="https://docs.microsoft.com/pt-br/typography/font-list/segoe-ui" rel="stylesheet" type="text/css"/>

      <img src={LogoP} style={{width: '100%', height: 'auto',}}/>
      <img src={onda} style={{width: '100%', height: 100,}}/>

      <div className="DivAnimacao">

      <div className="DivAnimacao1">

        <div className="LinhaAnim"></div>

        <img src={VR} className="Vr"
        style={{width: TamVr, height: 'auto', 
        position: 'relative', cursor: 'pointer'}}
        onMouseEnter={() => setTamVr('23%')} 
        onMouseOut={() => setTamVr('20%')}
        onClick={() => setLeftAnim('17%')}/>

        <img src={AR} style={{width: TamAr, height: 'auto', 
        position: 'relative', cursor: 'pointer'}}
        onMouseEnter={() => setTamAr('23%')} 
        onMouseOut={() => setTamAr('20%')}
        onClick={() => setLeftAnim('33.5%')}/>

        <img src={CA} style={{width: TamCa, height: 'auto', 
        position: 'relative', cursor: 'pointer'}}
        onMouseEnter={() => setTamCa('23%')} 
        onMouseOut={() => setTamCa('20%')}
        onClick={() => setLeftAnim('48.25%')}/>

        <img src={MM} style={{width: TamMm, height: 'auto', 
        position: 'relative', cursor: 'pointer'}}
        onMouseEnter={() => setTamMm('23%')} 
        onMouseOut={() => setTamMm('20%')}
        onClick={() => setLeftAnim('63%')}/>

        <img src={VA} style={{width: TamVa, height: 'auto', 
        position: 'relative', cursor: 'pointer'}}
        onMouseEnter={() => setTamVa('23%')} 
        onMouseOut={() => setTamVa('20%')}
        onClick={() => setLeftAnim('79.5%')}/>

        <div className="ItensLinha" style={{left: LeftAnim, transition: 'left 0.5s',}}></div>

      </div>

      <div className="DivAnimacao2">

      </div>

      </div>

      <a href="http://localhost:3000/projetos/progenios#GeniosWork"> Teste</a>

      <div className="C1TitleProgenios">
        <div className="DivLinhaP"></div>
        <h className="C1HProgenios">Por que criamos o Progenios?</h>
      </div>
      <div className="C1Progenios">
          <div className="C1TextoProgenios">A tecnologia vem se desenvolvendo e moldando-se de acordo com as nossas necessidades, com o seu auxílio algumas problemáticas da nossa sociedade ganharam soluções no mínimo efetivas e realmente viáveis. No entanto, em alguns países como o Brasil a tecnologia não é bem aplicada, e por esse motivo, várias áreas como a da educação vêm sendo prejudicadas.  
          A educação brasileira sempre foi um tema bastante discutido, encontrar novos caminhos e ferramentas para melhorar seus resultados vem tornando-se algo cada vez mais complexo. A dificuldade em descobrir metodologias de ensino efetivas é refletida no desempenho do país em rankings globais de educação como o PISA. <br/> 
          <br/>
          A grande problemática que permeia a junção de tecnologia e educação no Brasil é o fato de que muitas vezes essa associação não é bem planejada, e carece de experiência para torná-la dinâmica, produtiva e divertida para os alunos. Sendo assim, podemos inferir que não basta apenas inserir a tecnologia na educação, mas que é preciso também tornar essa junção agradável e amigável para os alunos e professores, para que assim bons resultados possam ser obtidos. <br/>
          <br/>
          Nesse contexto, a equipe Milos desenvolveu o Progenios, o qual trata-se de uma inciativa que tem o objetivo de trazer melhorias inovadoras para a área da educação. Deixando de lado as metodologias de ensino tradicional, a qual criamos laços que precisam ser rompidos e que por muitas vezes não conseguimos, apostamos nas tecnologias atuais como principal ferramenta para agregar valores e conhecimento tanto para alunos quanto para professores. Esperamos que o Progenios eleve o nível da educação brasileira para um novo patamar. 
          </div>
          <div className="DivVerdeProgenios"></div>
        </div>

      <div className="C2TitleProgenios">
        <div className="DivLinhaP"></div>
        <h className="C2HProgenios">O que é o Progenios?</h>
      </div>

      <div className="C2Progenios">
        <div className="DivVerde2Progenios"></div>
        <div className="C2TextoProgenios">Levando em consideração a situação apresentada, a equipe Milos desenvolveu o Progenios, o qual trata-se de uma inciativa que tem o objetivo de trazer melhorias inovadoras para a área da educação. Deixando de lado as metodologias de ensino tradicional, a qual criamos laços que precisam ser rompidos e que por muitas vezes não conseguimos, apostamos nas tecnologias atuais como principal ferramenta para agregar valores e conhecimento tanto para alunos quanto para professores. Esperamos que o Progenios eleve o nível da educação brasileira para um novo patamar. 
        <br/>
        <br/>
        A partir de agora serão dados maiores detalhes a respeito de como o Progenios funciona. Disponibilizaremos o máximo de informações possíveis afim de minimizar quaisquer dúvidas que possam vir a aparecer. 
        <br/>
        <br/>
        O Progenios é dividido em duas frentes principais, a primeira é um aplicativo que será disponibilizado para alunos de diversas escolas, e que, uma vez instalado, disponibilizará uma gama de conteúdos e métodos de ensino diferentes, focados tanto para a escola quanto para vestibulares como o ENEM.  A segunda parte consiste num site, este além de funcionar como uma extensão do aplicativo apresenta várias outras informações extras, como curiosidades e dados a respeito do Milos, e para aqueles interessados na área da tecnologia reservamos um espaço totalmente dedicado a apresentar com mais detalhes as diversas tecnologias existentes no mercado atual. 
        </div>
      </div>

      <div className="C3TitleProgenios">
        <div className="DivLinhaP"></div>
        <h className="C3HProgenios">Nosso próprio aplicativo</h>
      </div>

      <div className="C3Progenios">
        <div className="C3TextoProgenios">A gameficação geralmente traz bons resultados quando aplicado em qualquer que seja o contexto, e com a educação não é diferente. Por esse motivo, adicionamos e aplicamos diversos conceitos da gameficação na construção do aplicativo Progenios, conceitos esses que foram adaptados para atender as necessidades acadêmicas do aluno. Ainda a respeito do aplicativo, é importante mencionar que para adequá-lo ao formato do texto e para garantir ao leitor um melhor entendimento este foi dividido em subpartes que serão melhor explicadas posteriormente.
          <br/>
          <br/>
          <h style={{position: 'relative', right: '45.8%', fontSize: 25, fontWeight: 'bold',}}>GeniosCup</h>
          <br/>
          <br/>
          Um dos primeiros frutos obtidos a partir do uso da gameficação foi o que batizamos de GeniosCup. Se trata de um jogo competitivo de perguntas e respostas no qual diversos alunos de uma mesma instituição disputam entre si as melhores posições do ranking da escola. A temática das perguntas varia entre os diversos temas apresentados no decorrer de todo o Ensino Médio.  
          <br/>
          <br/>
          As partidas do GeniosCup podem ser geradas por qualquer professor que esteja devidamente cadastrado no sistema da escola e no sistema do Milos. O pedagogo está livre para personalizar a partida de acordo com a necessidade de seus alunos, assim, podendo escolher dentre os vários temas e modos de jogo disponíveis aquele que melhor se adequa a sua situação. Uma vez criada, a partida torna-se jogável para os alunos e seu ranking é atualizado a cada pergunta. 
          <br/>
          <br/>
          Além do modo multijogador julgamos ser interessante adicionar, também, um modo treino. Como o nome sugere, este modo foi pensado para que os estudantes possam praticar e testar os conhecimentos adquiridos sem a necessidade de esperar alguma partida ser gerada. 
          <br/>
          <br/>
          Assim como várias outras funções do aplicativo Progenios, o GeniosCup possui um sistema de recompensa baseado no desempenho do aluno. Nesse caso, quanto melhor for a colocação no ranking da partida melhores serão as recompensas que podem variar de Milos Coins, moedas usadas para compra itens na loja do aplicativo e dicas no GeniosCup, até pontos estelares, que indicam o sucesso do aluno no GeniosCup, para obtê-los basta ocupar as melhores posições do ranking de uma partida, porém, os pontos estelares não são totalmente acumulativos, isso significa que é possível perdê-los caso o desempenho não seja bom. 
          <br/>
          <br/>
          <h id="GeniosWork" style={{position: 'relative', right: '45.8%', fontSize: 25, fontWeight: 'bold',}}>GeniosWork</h>
          <br/>
          <br/>
          A comunicação entre aluno e professor é de suma importância para que uma educação de qualidade possa ser ministrada, por esse motivo, o Milos construiu o GeniosWork. Este assume o papel de armazenar e organizar todas as informações referentes a atividades, faltas e avisos/lembretes relacionadas ao aluno. 
          <br/>
          <br/>
          Os lembretes compõem a primeira tela do GeniosWork, aqui estão disponíveis todos os comentários e avisos feitos por professores, leitura sugerida ou datas de seminários por exemplo. Para dinamizar a comunicação aluno/professor e para que os alunos possam sanar qualquer dúvida que venha a aparecer a função de comentários está disponível. Sempre que o docente enviar um novo aviso uma notificação será imediatamente emitida para os estudantes. 
          <br/>
          <br/>
          Todas as atividades enviadas para os dissentis tem por padrão uma descrição que informa matéria, conteúdo, quantidade de questões e o prazo de entrega. A descrição é uma ferramenta importante para auxiliar na organização do tempo. Todas as atividades concluídas são armazenadas e estão disponíveis para serem vistas novamente.  
          <br/>
          <br/>
          O sistema de faltas obedece aos padrões já conhecidos, ou seja, sempre que o educando não está presente na aula uma falta é marcada. O grande diferencial é que no aplicativo Progenios o processo de marcação é ser feito no próprio aplicativo, assim, acabando com a necessidade de se usar cadernetas convencionais. Quando uma falta é marcada o aluno faltoso recebe uma notificação e terá um prazo de até dois dias para justificar sua ausência, a justificativa também pode ser feita pelo aplicativo. 
          <br/>
          <br/>
          <h style={{position: 'relative', right: '41%', fontSize: 25, fontWeight: 'bold',}}>Matérias e Conteúdos</h>
          <br/>
          <br/>
          A construção do conhecimento não pode ser estática, essa informação mostra-se verdadeira quando percebemos que estamos inseridos num modelo de sociedade que exige profissionais cada vez mais capacitados, em outras palavras, que exige pessoas cada vez mais informadas. Nesse sentido, o Milos selecionou, organizou e separou todos os conteúdos vistos no Ensino Médio e Fundamental de acordo com suas respectivas disciplinas, cada conteúdo apresenta mais de um método de aprendizado, assim, facilitando e dinamizando o contato do jovem com o conhecimento. 
          <br/>
          <br/>
          Visando reduzir ao máximo o espaço ocupado pelo aplicativo Progenios, o Milos optou por não inserir todas as disciplinas ao mesmo tempo, em vez disso, decidimos deixa-las armazenadas em um banco de dados, dessa maneira, sempre o aluno tiver interesse em estudar algum conteúdo ele pode baixar a disciplina diretamente desse banco e quando terminar pode excluí-la. 
          <br/>
          <br/>
          Como havia dito, a gameficação está presente em várias partes do aplicativo, aqui ela se mostra na forma de charadas. Sempre que um aluno estiver estudando algum assunto eventualmente uma charada a respeito deste aparece, a charada contém três opões de resposta: Uma correta, uma meio correta e uma errada. Dependendo da opção escolhida o usuário será premiado com uma recompensa. 
          <br/>
          <br/>
          <h style={{position: 'relative', right: '33.5%', fontSize: 25, fontWeight: 'bold',}}>Nossa contribuição para o vestibular</h>
          <br/>
          <br/>
          Boa parte dos estudantes, tanto da rede pública quanto particular, almejam concluir o Ensino Médio e ingressar no Ensino Superior, entretanto, alguns não possuem nem uma boa base e nem uma boa noção de como se preparar para enfrentar todos os desafios que um vestibular pode proporcionar. Pensando nisso, adicionamos em nosso app uma área totalmente focada em preparar jovens para testes como o ENEM. 
          <br/>
          <br/>
          Esta parcela do app foi subdividida em quatro partes: Conteúdos mais cobrados: O aluno pode focar somente em assuntos relevantes para o vestibular que deseja fazer, pode marca os conteúdos já estudados e revê-los caso necessário; Simulados: Para recriar a experiência de fazer um simulado real pode-se escolher essa função, após selecionar o exame e edição que deseja o simulado começa, ao final estatísticas a respeito do desempenho são exibidas; Redação: Em alguns casos a redação tem um grande peso na nota do aluno, por esse motivo, ela merece um grande enfoque. O sistema permite ao aluno escolher ou sortear a temática a ser dissertada, uma vez escrita, a redação pode ser submetida a correção; Estatísticas: Registra e exibe dados relacionados ao desempenho, esses dados variam desde melhor pontuação na redação até o melhor tempo de conclusão de um simulado.  
          <br/>
          <br/>
          <h style={{position: 'relative', right: '50%', fontSize: 25, fontWeight: 'bold',}}>Loja</h>
          <br/>
          <br/>
          Essa é a última divisão a ser abordada, a loja é o lugar onde parte dos Milos Coins são usados. O intuito da loja é incentivar alunos a se dedicarem cada vez mais a escola, para isso utiliza um sistema de comercio baseado no desempenho escolar do aluno. Isso significa que quanto mais dedicado for o estudante mais Milos Coins ele terá, logo, este poderá comprar itens cada vez melhores. Além disso, incluímos uma função que permite ao professor premiar com itens exclusivos alunos que tenham atingido alguma meta proposta em sala de aula ou no próprio aplicativo.
        
        </div>
        <div className="DivVerde3Progenios"></div>
      </div>

      <div className="C4TitleProgenios">
        <div className="DivLinhaP"></div>
        <h className="C4HProgenios">O que é o Progenios?</h>
      </div>

      <div className="C4Progenios">
        <div className="DivVerde4Progenios"></div>
        <div className="C4TextoProgenios">
        <br/>
        <br/>
      
        <br/>
        <br/>

        </div>
      </div>

    </div>
  )
}

function Progenios() {
  return (
    <div>
      <Head/>
      <Meio/>
      <Footer/>
    </div>
  );
}

export default Progenios;
