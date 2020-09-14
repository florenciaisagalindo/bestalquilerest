import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './style.css';
import { FaFacebookSquare, FaInstagram, FaSpotify } from 'react-icons/fa';
import { BsCreditCard } from 'react-icons/bs';




const Pie = () => {
    return ( 
        <div >
                 <MDBFooter className="font-small pt-4 mt-4" id="footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="contenedor">
        <MDBCol md="4">
              <img id="logo-footer" src="../../img/logo/blanco-bajada.jpg"></img>            
              <p className="py-2" id="info-footer">San Miguel de Tucumán, Tucumán, Argentina. <br/>Lunes a Domingos de 9:00 a 21:00. </p>
          </MDBCol>
          <MDBCol md="4" id="links">
            <ul className="links my-5">
              <li className="list-unstyled">
                <a className="link-footer" href="#!">Departamentos</a>
              </li>
              <li className="list-unstyled">
                <a className="link-footer" href="#!">Preguntas frecuentes</a>
              </li>
              <li className="list-unstyled">
                <a className="link-footer" href="#!">Sumar mi propiedad</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <ul id="rrss_cont" className="d-flex flex-row pl-2 my-5">
              <li className="list-unstyled  mt-2 mr-2" >
                <a className="link-footer" id="rrss" href="https://www.instagram.com/best.alquilertemporario/" target="_blank"rel="noopener noreferrer"><FaInstagram size='47px'/></a>
              </li>
              <li className="list-unstyled  mt-2 mr-2">
                <a className="link-footer" id="rrss" href="https://www.facebook.com/best.alquilertemporario/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size='45px'/></a>
              </li>
              <li className="list-unstyled  mt-2 mr-2">
                <a className="link-footer" id="rrss" href="https://open.spotify.com/user/1gercicw24c2840qu4oyilvpe?si=F9QZtlXwR_6anM-vX5AnxA" target="_blank" rel="noopener noreferrer"><FaSpotify size='45px'/></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-payments text-center py-2">
      <MDBContainer fluid className="mx-0 my-3" id="payments" >
        <div className="formasPago">
              <img className="img-pay" src='../../../img/version-vertical-large.png' width='60px' ></img>
              <img className="img-pay" src='../../../img/uala.png' width='50px'></img>
              <img className="img-pay" src='../../../img/bru.png' width='90px'></img>
              <img className="img-pay my-2" src='../../../img/pf.png' width='80px'></img>
              <img className="img-pay" src='../../../img/r-p.png' width='90px'></img>
              <img className="img-pay" src='../../../img/visa1.png' width='80px'></img>
              <img className="img-pay" src='../../../img/mc.png' width='80px'></img>
        </div>
        </MDBContainer>
        <MDBContainer fluid className="mx-0 my-2">
          &copy; {new Date().getFullYear()} Copyright Best Alquiler Temporario
        </MDBContainer>
        <p className="desarrollo"> Hecho con ❤️ by <a>Florí</a></p>
      </div>
    </MDBFooter>
        </div>
     );
}
 
export default Pie;