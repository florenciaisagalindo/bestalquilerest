import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import 'mdbreact/dist/css/mdb.css';
import NavB from './Componentes/Navbar';
import Car from './Componentes/Carousel';
import BestApar from './Componentes/BestApar';
import Tarjetas from './Componentes/Cards';
import Pie from './Componentes/Footer';
import Departamentos from './Pages/Departamentos';
import Pasos from './Componentes/Pasos';
import Nosotros from './Pages/Nosotros';
import DeptoInfo from './Pages/DeptoInfo';

function App() {
  return (
    <Router>
      <NavB/>
      <Switch>
        <Route path="/" exact>
          <Car/>
          <Pasos/>
          <BestApar/>
          <hr/>
          <Tarjetas/>
        </Route>
        <Route exact path="/departamentos">
          <hr/>
        <Departamentos/>
        </Route>
      <Route exact path="/departamentos/:id"component={DeptoInfo}/>
      </Switch>
      <Pie/>
    </Router>
  );
}

export default App;
