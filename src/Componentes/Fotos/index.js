import React from 'react';
import './style.css';

const Gallery = () => {
    return ( 
        <div style={{ margin: 'auto'}}>
   
    <div className="row mt-5" id="contenedorP"  >

          <div className="col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src="http://lorempixel.com/400/200/" alt="">
                    </img></a>
         </div>
         <div className="col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src="http://lorempixel.com/400/200/" alt="">
                    </img></a>
         </div>
         <div className="col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src="http://lorempixel.com/400/200/" alt="">
                    </img></a>
         </div>
         <div className="col-6">
                <a href="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src="http://lorempixel.com/400/200/" alt="">
                    </img></a>
         </div>
         
    </div>
        </div>
    
);     
    }
 

export default Gallery;