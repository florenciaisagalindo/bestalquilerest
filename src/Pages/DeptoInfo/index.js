import React from 'react';
import './style.css';
import SwipeableTextMobileStepper from '../../Componentes/SlideFotos/index';
import Mapa from '../../Componentes/Map/index';
import Credentials from '../../Credentials';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=9.4.5.exp&key=${Credentials.mapsKey}`;

const DeptoInfo = () => {
    return (
        <>
        <div className="seccion1">
            <div className="inforDeptos">
                <h3>Amenities</h3>
                <p>Aqui van los amenities</p>
            </div>
            <div className="imgDeptos">
                <SwipeableTextMobileStepper />
            </div>
        </div>
        <div className="seccion2">
            <div className="descDeptos"></div>
            <div className="precioDeptos"></div>
        </div>
        <div className="seccion3">
            <div className="comenDeptos"></div>
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