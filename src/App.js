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
import Sumate from './Componentes/Sumate';
import Pie from './Componentes/Footer';
import Departamentos from './Pages/Departamentos';
import Pasos from './Componentes/Pasos';
import DeptoInfo from './Pages/DeptoInfo';
import About from './Componentes/About/index';
import Whatsapp from './Componentes/Whatsapp/whatsapp';
import BestSale from './Componentes/BestSale';
import Faqs from './Pages/Faqs';
import AparLand from './Componentes/AparLand';
import ValoracionesLand from './Componentes/ValoracionesLand';
import Blog from './Componentes/Blog/index'
import SimpleReactLightbox from 'simple-react-lightbox'


function App() {
  return (
    <SimpleReactLightbox>

    <Router>
      <NavB/>
      <Switch>
      <Route path="/" exact>
        <Car/>
        <About/>
        <Pasos/>
        <AparLand/>
        <ValoracionesLand/>
        <Sumate/>
      </Route>
      <Route exact path="/departamentos">
        <Departamentos/>
      </Route>
      <Route exact path="/departamentos/:slug">
        <DeptoInfo/>
      </Route>
      <Route exact path="/faqs">
        <Faqs/>
      </Route>

      <Route exact path="/blog">
        <Blog/>
      </Route>
      </Switch>
      <Whatsapp/>
      <Pie/>
    </Router>
    </SimpleReactLightbox>

  );
}

export default App;
