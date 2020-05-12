import React from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
 
    return ( 
        <Navbar bg="warning" variant="dark">
          <div className="container">
              <div>
              <img className="logo" style= {{width:'20%'}} src='./img/logo/negro_bajada.jpg' alt="logo "></img>
              </div>
              <div className="ml-auto">
                <a href="#pricing">Inicio</a>
                <a href="#pricing">Nosotros</a>
                <a href="#pricing">Servicios</a>
                <a href="#pricing">Ayuda</a>
               </div>
               </div>

        </Navbar>
   );
};
 
export default Nav;