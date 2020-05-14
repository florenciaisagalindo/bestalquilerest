import React from 'react';
import NavB from './Componentes/Navbar';
import Car from './Componentes/Carousel';
import Gallery from './Componentes/Fotos';
import Tarjetas from './Componentes/Cards';
import Pie from './Componentes/Footer';


function App() {
  return (
    <div className="App">
      <NavB/>
      <Car/>
      <h1  style={{ margin: 'auto'}}>Nuestros servicios</h1>
      <Tarjetas/>
      <hr/>
      <h2  style={{ margin: 'auto'}}>#BEST Aparments</h2>
      <Gallery/>
      <hr/>
      <Pie/>
    </div>
  );
}

export default App;
