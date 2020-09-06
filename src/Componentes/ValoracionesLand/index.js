import React from 'react';
import './style.css';

const ValoracionesLand = () => {
    return ( 
        <div className="todo">
            
            <div className="titulo_valora">
                <h2 className="titulo_valora1">Nuestros</h2><h2 className="titulo_valora2">BEST GUESTS</h2><h2 className="titulo_valora3"></h2>
            </div>    
        <div id="slider">
            <input type="radio" name="slider" id="slide1" checked />
            <input type="radio" name="slider" id="slide2"/>
            <input type="radio" name="slider" id="slide3"/>
            <input type="radio" name="slider" id="slide4"/>
        <div id="slides">
            <div id="overflow">
         <div className="inner">
            <div class="slide slide_1">
               <div className="slide-content">
                  <h2>Slide 1</h2>
                  <p>Content for Slide 1</p>
                  <p>Content for Slide 1</p>

               </div>
            </div>
            <div className="slide slide_2">
               <div class="slide-content">
                  <h2>Slide 2</h2>
                  <p>Content for Slide 2</p>
               </div>
            </div>
            <div className="slide slide_3">
               <div className="slide-content">
                  <h2>Slide 3</h2>
                  <p>Content for Slide 3</p>
               </div>
            </div>
            <div className="slide slide_4">
               <div className="slide-content">
                  <h2>Slide 4</h2>
                  <p>Content for Slide 4</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="controls">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
   <div id="bullets">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
</div>
</div>
     );
}
 
export default ValoracionesLand;