import React from 'react';
import './style.css';
import SwipeableTextMobileStepper from '../../Componentes/SlideFotos/index';


const DeptoInfo = () => {
    return (
        <>
        <div className="seccion1">
            <div className="inforDeptos">
                <h3>Amenities</h3>
                <p>lorem ipsum lkdjlkjaklñjñlkjñlkjñlkjañlkjñlkjñlkj</p>
            </div>
            <div className="imgDeptos">
                <SwipeableTextMobileStepper/>
            </div>
        </div>
        <div className="seccion2">
            <div className="descDeptos"></div>
            <div className="precioDeptos"></div>
        </div>
        <div className="seccion3">
            <div className="comenDeptos"></div>
            <div className="ubicDeptos"></div>
        </div>
        <div className="seccion4">
            <div className="similDeptos"></div>
        </div>
        </>);
}
 
export default DeptoInfo;