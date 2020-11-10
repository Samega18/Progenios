import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Home/Home';
import Projetos from './Projetos/Projetos';
  import Progenios from './Projetos/Progenios/Progenios';
import Tecnologias from './Programações/Programacoes';
  import Node from './Programações/Node/Node';
  import Npm from './Programações/Npm/Npm';
  import Python from './Programações/Python/Python';
import QuemSomos from './QuemSomos/QuemS';
import Contato from './Contato/Contato';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/projetos" exact component={Projetos} />
          <Route path="/projetos/progenios" exact component={Progenios} />
        <Route path="/tecnologias" exact component={Tecnologias} />
          <Route path="/tecnologias/node" exact component={Node} />
          <Route path="/tecnologias/npm" exact component={Npm} />
          <Route path="/tecnologias/python" exact component={Python} />
        <Route path="/quem-somos" exact component={QuemSomos}/>
        <Route path="/contato" exact component={Contato}/>

      </Switch>
    </BrowserRouter>
  );
}