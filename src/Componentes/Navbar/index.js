import React from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


/*  ./img/logo/best_t.png
ESTO ESTA AQUI DE REFERENCIA PARA PONERLO EN FIREBASE SINO NO ME TOMA EN LAS OTRAS PAGES
 */

const NavB = () => {
    return ( 
      
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed= "top">
     <img className="logo" style= {{width:'55px', margin:'auto 65px' , padding: 'auto 10px', borderRadius: '100%'}} src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/logos%2Flogo_blanco.jpg?alt=media&token=da0be96e-c5b6-4e81-a937-8223e0acfc44" alt=""></img> 
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <NavLink className="link-nav" to="/" eventKey={2} style={{paddingTop: '16px'}}>
        Inicio
      </NavLink>
      <NavLink className="link-nav" to="/departamentos" eventKey={2}style={{paddingTop: '16px'}}>
        Departamentos
      </NavLink>
      
      <NavDropdown className="link-nav" title="Alquiler" id="collasible-nav-dropdown"> 
        <NavDropdown.Item><Link className="link-nav" to="/info_alquileres">Particulares</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/info_sumardpto">Empresas</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item><Link to="/faqs">Preguntas frecuentes</Link></NavDropdown.Item>
      </NavDropdown>
      <Button id="btn_r" variant="contained" color="primary" href="#reservar" style={{margin: 'auto 610px'}}>Reservar</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
   );
};
 
export default NavB;
