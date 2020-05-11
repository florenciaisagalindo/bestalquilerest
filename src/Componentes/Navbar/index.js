import React from 'react';
import Navbar from 'react-bootstrap/Navbar'; 
import './style.css';

const Nav = () => {
 
    return ( 
       
        <Navbar bg="dark" variant="dark">
            <h1>Best</h1>
            <Nav className="mr-auto">
                <a>Inicio</a>
                <a>Nosotros</a>
                <a>Ayuda</a>
            </Nav>  
       </Navbar>
   );
};
 
export default Nav;