import React from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from 'react-bootstrap';

const NavB = () => {
 
    return ( 
        // <Navbar bg="warning" variant="dark">
        //   <div className="container">
        //       <div>
        //       <img className="logo" style= {{width:'80px'}} src='./img/logo/negro_bajada.jpg' alt="logo "></img>
        //       </div>
        //       <div className="ml-auto">
        //         <Nav.Link className="link" href="#pricing">Inicio</Nav.Link>
        //         <Nav.Link href="#pricing">Contacto</Nav.Link>
                
        //        </div>
        //        </div>

        // </Navbar>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed= "top">
     <img className="logo" style= {{width:'56px'}} src="./img/logo/logo_negro.png" alt=""></img> 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
        Inicio
      </Nav.Link>
      <NavDropdown title="Alquileres" id="collasible-nav-dropdown"> 
        <NavDropdown.Item href="#action/3.1">Por día</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Estancias largas</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Preguntas frecuentes</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#deets">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
   );
};
 
export default NavB;