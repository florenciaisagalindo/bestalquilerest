import React from 'react';
import Nav from './Componentes/Navbar';
import Car from './Componentes/Carousel';
import Gallery from './Componentes/Fotos';
import Tarjetas from './Componentes/Cards';
import Pie from './Componentes/Footer';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Car/>
      <Gallery/>
      <hr/>
      <Tarjetas/>
      <hr/>
      <Pie/>
    </div>
  );
}

export default App;
