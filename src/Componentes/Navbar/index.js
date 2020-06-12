import React from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const NavB = () => {
 
    return ( 
      
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed= "top">
     <img className="logo" style= {{width:'35px', margin:'auto 30px' , padding: 'auto 20px'}} src="./img/logo/best_t.png" alt=""></img> 
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
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
      <Button id="btn_r" variant="contained" color="primary" href="#contained-buttons" style={{margin: 'auto 550px'}}>Reservar</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
   );
};
 
export default NavB;