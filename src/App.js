import React from 'react';
import 'mdbreact/dist/css/mdb.css';
import NavB from './Componentes/Navbar';
import Car from './Componentes/Carousel';
import BestApar from './Componentes/BestApar';
import Tarjetas from './Componentes/Cards';
import Pie from './Componentes/Footer';


function App() {
  return (
    <div className="App">
      <NavB/>
      <Car/>
      <BestApar/>
      <hr/>
      <Tarjetas/>
      <Pie/>
    </div>
  );
}

export default App;
