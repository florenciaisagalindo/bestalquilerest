import React from 'react';
import './style.css';
import { SRLWrapper } from 'simple-react-lightbox';


const options = {
    settings: {
      autoplaySpeed: 3500,
    },
    buttons: {
      showDownloadButton: false,
  
    },
    caption: {
      showCaption: false,
    }
  };

const Grid = () => {
    return ( 
        <SRLWrapper  options={options}>
        <div className="grid">
            <div  className="cuadro1" ><img  className="img-prueba" src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/Lavalle%2FLavalle_707_7A_002.jpg?alt=media&token=4b27c25d-5f50-4236-8f7e-5c3ca76893b3"></img></div>
            <div className="cuadro2">
                <div className="img1"> <img className="img-prueba2" src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/Lavalle%2FLavalle_707_7A_002.jpg?alt=media&token=4b27c25d-5f50-4236-8f7e-5c3ca76893b3"></img></div>
                <div className="img2"></div>
                <div className="img3"></div>
                <div className="img4"><button className="masfotos">Ver más fotos</button></div>
            </div>
        </div>
        </SRLWrapper>

     );
}
 
export default Grid;