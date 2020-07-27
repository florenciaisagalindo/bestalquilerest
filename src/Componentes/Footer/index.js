import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './style.css';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa'



const Pie = () => {
    return ( 
        <div >
                 <MDBFooter className="font-small pt-4 mt-4" id="footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="contenedor">
        <MDBCol md="3">
            <h3>BEST </h3>
            <p className="py-2">San Miguel de Tucumán, Tucumán, Argentina. <br/>Lunes a Domingos de 9:00 a 21:00. </p>
          </MDBCol>
          <MDBCol md="3" id="links">
            <ul className="links">
              <li className="list-unstyled">
                <a className="link-footer" href="#!">Quiénes somos</a>
              </li>
              <li className="list-unstyled">
                <a className="link-footer" href="#!">Preguntas frecuentes</a>
              </li>
              <li className="list-unstyled">
                <a className="link-footer" href="#!">Sumar mi propiedad</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <h6 className="title">Seguínos en:</h6>
            <ul id="rrss_cont" className="d-flex flex-row pl-2">
              <li className="list-unstyled  mt-2 mr-2" >
                <a className="link-footer" id="rrss" href="https://www.instagram.com/best.alquilertemporario/" target="_blank"><FaInstagram size='26px'/></a>
              </li>
              <li className="list-unstyled  mt-2 ">
                <a className="link-footer" id="rrss" href="https://www.facebook.com/best.alquilertemporario/" target="_blank" ><FaFacebookSquare size='26px'/></a>
              </li>
                 
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <h6 className="title">Reservá por:</h6>
            <ul id="rrss_cont" className="d-flex flex-row pl-4" >
              <li className="list-unstyled mt-2">
                <a className="link-footer" id="rrss" href="https://api.whatsapp.com/send?phone=543813040583" target="_blank"><FaWhatsapp size='26px'/></a>
              </li>   
            </ul>
          </MDBCol>
    
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-6">
        <MDBContainer fluid className="mx-0">
          &copy; {new Date().getFullYear()} Copyright Best Alquiler Temporario
        </MDBContainer>
      </div>
    </MDBFooter>
        </div>
     );
}
 
export default Pie;