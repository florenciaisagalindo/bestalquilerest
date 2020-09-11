import React from 'react';
import './style.css';

const AparLand = () => {
    return ( 
        <div className="contenedor-AL">
                <div className="span-ap"></div>
                    <h2 className="titulo-aparland1">Conocé nuestros</h2><h2 className="titulo-aparland2">deptos Best</h2>
                <div className="span-ap"></div>

        <div className="container-aparland">
            <div className="secc-1">
                <img src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/apart-land%2Fmono-chaca.jpg?alt=media&token=383129ae-5e8d-49bb-96ac-2fce6e34fa44" className=""></img>
                <img src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/apart-land%2Flavalle.jpg?alt=media&token=1a433304-f637-478d-8a06-1a4ca15fe471" className=""></img>
            </div>
            
            <div className="secc-2">
                <img src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/apart-land%2Fcorrientes.jpg?alt=media&token=49ac2ed8-a65b-43f3-99b4-3947fdc3140e" className=""></img>
                <img src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/apart-land%2F4chaca.jpg?alt=media&token=3044622a-d449-4f63-81c8-bc9a4f96ca7a" className=""></img>

            </div>
           <button className="ver-deptos">ver todos</button>






        </div>
        </div>
     );
}
 
export default AparLand;