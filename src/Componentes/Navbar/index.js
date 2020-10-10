import React from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';




const NavB = () => {
    return ( 
      
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed= "top">
     <img className="logo" style= {{width:'55px', margin:'auto 65px' , padding: 'auto 10px', borderRadius: '100%'}} src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/logos%2Flogo_blanco.jpg?alt=media&token=da0be96e-c5b6-4e81-a937-8223e0acfc44" alt=""></img> 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" src=""/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <NavLink className="link-nav" to="/" eventKey={2} style={{paddingTop: '16px'}}>
        Inicio
      </NavLink>
      <NavLink className="link-nav" to="/departamentos" eventKey={2}style={{paddingTop: '16px'}}>
        Departamentos
      </NavLink>
      <NavLink className="link-nav" to="/faqs" eventKey={2}style={{paddingTop: '16px'}}>
        Faqs
      </NavLink>
      <NavLink className="link-nav" to="/blog" eventKey={2}style={{paddingTop: '16px'}}>
       Blog
      </NavLink>
      
      
      <Button id="btn_r" variant="contained" color="primary" href="https://api.whatsapp.com/send?phone=54381040583" target="_blank" style={{margin: 'auto 570px'}}>Reservar</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
   );
};
 
export default NavB;
