import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import 'mdbreact/dist/css/mdb.css';
import NavB from './Componentes/Navbar';
import Car from './Componentes/Carousel';
import BestApar from './Componentes/BestApar';
import Tarjetas from './Componentes/Cards';
import Pie from './Componentes/Footer';
import Departamentos from './Pages/Departamentos';
import Pasos from './Componentes/Pasos';
import DeptoInfo from './Pages/DeptoInfo';
import About from './Componentes/About/index';
import Whatsapp from './Componentes/Whatsapp/whatsapp';
import BestSale from './Componentes/BestSale';
import Faqs from './Pages/Faqs';
import AparLand from './Componentes/AparLand';

function App() {
  return (
    <Router>
      <NavB/>
      <Switch>
        <Route path="/" exact>
          <Car/>
          <About/>
          <Pasos/>
          <AparLand/>
          <hr/>
          <Tarjetas/>
        </Route>
        <Route exact path="/departamentos">
          <hr/>
        <Departamentos/>
        </Route>
      <Route exact path="/departamentos/:id"component={DeptoInfo}/>
      <Route exact path="/faqs" exact>
        <Faqs/>
        </Route>
      </Switch>
      <Whatsapp/>
      <Pie/>
    </Router>
  );
}

export default App;
