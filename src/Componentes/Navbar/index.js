import React from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from 'react-bootstrap';

const NavB = () => {
 
    return ( 
      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed= "top">
     <img className="logo" style= {{width:'56px', margin:'auto 5px'}} src="./img/logo/logo_negro.png" alt=""></img> 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
        Inicio
      </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Departamentos
      </Nav.Link>
      <NavDropdown title="Información" id="collasible-nav-dropdown"> 
        <NavDropdown.Item href="#action/3.1">Alquileres</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sumá tu depto</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Best Limpieza</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#deets">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
   );
};
 
export default NavB;