import React from 'react';
import './style.css';
import SwipeableTextMobileStepper from '../../Componentes/SlideFotos/index';
import Mapa from '../../Componentes/Map/index';
import Credentials from '../../Credentials';
import Carousel from 'react-bootstrap/Carousel';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=9.4.5.exp&key=${Credentials.mapsKey}`;

const DeptoInfo = () => {
    return (
        <>
        <div><Carousel className="w-100">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/Lavalle%2FLavalle_707_7A_002.jpg?alt=media&token=4b27c25d-5f50-4236-8f7e-5c3ca76893b3"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/Lavalle%2FLavalle_707_7A_005.jpg?alt=media&token=d0f30779-56a9-4549-bd9a-925bf51e1e3a"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/Lavalle%2FLavalle_707_7A_012.jpg?alt=media&token=e768ca69-bbc6-4a74-99c9-b54de1971b91"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/Lavalle%2FLavalle_707_7A_012.jpg?alt=media&token=e768ca69-bbc6-4a74-99c9-b54de1971b91"
      alt="cuarto slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  
 </Carousel>

  
</div>
        
        <div className="seccion1">
            <div className="descDeptos">
                <div className="inforDeptos">
                <h3>Descripción</h3>
                <p className="texto-desc">MONOAMBIENTE refaccionado, totalmente equipado y amoblado. Super confortable. PERFECTA UBICACION, zona céntrica con acceso a todos los medios de transporte. PORTERO Y SEGURIDAD PRIVADA LAS 24 HS. Ideal para parejas y viajeros cansados. Cochera (no incluida en nuestro servicio) al frente del edificio. Estaremos para darte la BIENVENIDA¡ ver que te alojes comodamente y solucionar todas tus dudas. Somos amables, atentos y educados. 
El alojamiento es perfecto para una o dos personas. Tiene lugar para guardar cómodamente todas sus pertenencias. Todo el equipamiento necesario para que realice sus propias comidas, o lugares cerca para pedir comida o salir a comer. 
                </p>
            </div></div>
            <div className="amenities">
                <h3>Hola</h3>
                <div className="imagenes-amn">
                    <div className="hola"><img className="img-amenities" src="../../img/iconos/balcon.png"></img><p className="chau">si</p></div>
                    <img className="img-amenities" src="../../img/iconos/personas.png"></img>
                    <img className="img-amenities" src="../../img/iconos/pileta.png"></img>
                    <img className="img-amenities" src="../../img/iconos/baño.png"></img>
                    <img className="img-amenities" src="../../img/iconos/personas.png"></img>
                    <img className="img-amenities" src="../../img/iconos/pileta.png"></img>
                    <img className="img-amenities" src="../../img/iconos/personas.png"></img>
                    <img className="img-amenities" src="../../img/iconos/pileta.png"></img>
                    <img className="img-amenities" src="../../img/iconos/personas.png"></img>
                </div>
            </div>

        </div>
        <div className="seccion3">
            <div className="comenDeptos">
                <h5>lorem ipsum</h5>
                <h6>l;ekrw;elkjl;rkjwel;krjwlekjrlwkejfklndskmfnkjsfwlkejf</h6>
            </div>
            <div className="ubicDeptos">
            <Mapa
                    googleMapURL= {mapURL}
                    containerElement={<div style={{height: '340px'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}
                    loadingElement= {<p>Cargando</p>}
                    />
            </div>
        </div>
        <div className="seccion4">
            <div className="similDeptos"></div>
        </div>
        </>);
}
 
export default DeptoInfo;