import React from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

const NavB = () => {
 
    return ( 
      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed= "top">
     <img className="logo" style= {{width:'56px', margin:'auto 5px'}} src="./img/logo/logo_negro.png" alt=""></img> 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <NavLink to="/" eventKey={2} >
        Inicio
      </NavLink>
      <NavLink to="/departamentos" eventKey={2}>
        Departamentos
      </NavLink>
      <NavDropdown title="Información" id="collasible-nav-dropdown"> 
        <NavDropdown.Item><Link to="/info_alquileres">Alquileres</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/info_sumardpto">Sumá tu depto</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item><Link to="/info_bestlimpieza">Best Limpieza</Link></NavDropdown.Item>
      </NavDropdown>
      <NavLink to="/contacto">Contacto</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
   );
};
 
export default NavB;