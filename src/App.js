import React from 'react';
import 'mdbreact/dist/css/mdb.css';
import NavB from './Componentes/Navbar';
import Car from './Componentes/Carousel';
import Slideshow from './Componentes/Fotos';
import Tarjetas from './Componentes/Cards';
import Pie from './Componentes/Footer';


function App() {
  return (
    <div className="App">
      <NavB/>
      <Car/>
      <h2  style={{ margin: 'auto'}}>#BEST Aparments</h2>
      <Slideshow/>
      <hr/>
      <Tarjetas/>
      <Pie/>
    </div>
  );
}

export default App;
