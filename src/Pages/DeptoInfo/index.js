import React from 'react';
import './style.css';
import SwipeableTextMobileStepper from '../../Componentes/SlideFotos/index';
import Mapa from '../../Componentes/Map/index';
import Credentials from '../../Credentials';
import Carousel from 'react-bootstrap/Carousel';
import BestApar from '../../Componentes/BestApar';
import Grid from '../../Componentes/Grid'


const mapURL = `https://maps.googleapis.com/maps/api/js?v=9.4.5.exp&key=${Credentials.mapsKey}`;

const DeptoInfo = () => {
    return (
        <div className='contenedor-depto'>        
        <Grid/>
        <img
      id="prueba2"
      src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/Lavalle%2FLavalle_707_7A_002.jpg?alt=media&token=4b27c25d-5f50-4236-8f7e-5c3ca76893b3"
      alt="First slide"
    />
     <img
      id="prueba2"
      className="w-100" 
      src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/Lavalle%2FLavalle_707_7A_012.jpg?alt=media&token=e768ca69-bbc6-4a74-99c9-b54de1971b91"
      alt="Third slide"
    />
     <img
           id="prueba2"

      src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/Lavalle%2FLavalle_707_7A_012.jpg?alt=media&token=e768ca69-bbc6-4a74-99c9-b54de1971b91"
      alt="cuarto slide"

    />



<div className="nombre-depto"><h3 className="nombre-depto-txt"> Lavalle Suites</h3></div>
<hr/>
        <div className="seccion1">
            <div className="descDeptos">
                <p className="texto-desc">MONOAMBIENTE refaccionado, totalmente equipado y amoblado. Super confortable. PERFECTA UBICACION, zona céntrica con acceso a todos los medios de transporte. PORTERO Y SEGURIDAD PRIVADA LAS 24 HS. Ideal para parejas y viajeros cansados. Cochera (no incluida en nuestro servicio) al frente del edificio. Estaremos para darte la BIENVENIDA¡ ver que te alojes comodamente y solucionar todas tus dudas. Somos amables, atentos y educados. 
El alojamiento es perfecto para una o dos personas. Tiene lugar para guardar cómodamente todas sus pertenencias. Todo el equipamiento necesario para que realice sus propias comidas, o lugares cerca para pedir comida o salir a comer. 
                </p>
            </div>
        </div>
        <hr/>
        <div className="seccion2">
          <div className="amenities">
                  <div className="imagenes-amn">
                      <div className="hola" id="personas"><p className="chau">4</p></div>
                      <div className="hola" id="banio"><p className="chau">si</p></div>
                      <div className="hola" id="balcon"><p className="chau">si</p></div>
                      <div className="hola" id="piso"><p className="chau">7mo</p></div>
                      <div className="hola" id="ascensor"><p className="chau">si</p></div>
                      <div className="hola" id="wifi"><p className="chau">si</p></div>
                      <div className="hola"><p className="chau">si</p></div>
                      <div className="hola"><p className="chau">si</p></div>
                      <div className="hola"><p className="chau">si</p></div>
                      <div className="hola"><p className="chau">si</p></div>
                      <div className="hola"><p className="chau">si</p></div>
                      <div className="hola"><p className="chau">si</p></div>    
                  </div>
              </div>  
        </div>
      <hr/>
        <div className="seccion3">
            <div className="ubicDeptos">
            <Mapa
                    googleMapURL= {mapURL}
                    containerElement={<div style={{height: '340px'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}
                    loadingElement= {<p>Cargando</p>}
                    />
            </div>
        </div>
        <hr/>
            <div className="seccion4">   
            <div className="evaluaciones">
                <div><img src="../../../img/iconos/fivestars.png" id="estrellas"></img></div>
                <h5 className="ev-texto">"Un departamento genial, amplio, cómodo y súper completo. No le falta absolutamente nada. Súper limpio y prolijo, en un buen lugar, sin molestias. Súper recomendado."</h5>
                <h6>María, Córdoba</h6>
            </div>         
            </div>
            <hr/>

            <div className="seccion5">
            <div className="similDeptos"><BestApar/></div>

            </div>




        </div>);
}
 
export default DeptoInfo;