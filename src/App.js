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
import Departamentos from './Pages/Departamentos'


function App() {
  return (
    <Router>
      <NavB/>
      <Switch>
        <Route path="/" exact>
          <Car/>
          <BestApar/>
          <hr/>
          <Tarjetas/>
        </Route>
        <Route path="/departamentos">
          <hr/>
        <Departamentos/>
        </Route>
      </Switch>
      <Pie/>
    </Router>
  );
}

export default App;
