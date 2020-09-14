import React from 'react';
import './style.css';
import Hola from '../TextSlider/index';


const ValoracionesLand = () => {
    return ( 
        <div className="cont-valora">
            <div className="titulo_valora">
                <h2 className="titulo_valora1">Nuestros</h2><h2 className="titulo_valora2">HUÉSPEDES BEST</h2><h2 className="titulo_valora3"></h2>
            </div>    
            <div className="text-slider">
               <Hola/>  
            </div>               
</div>
     );
}
 
export default ValoracionesLand;