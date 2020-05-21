import  React from 'react';
import './style.css';
import { Fade } from 'react-slideshow-image';


const imglorem = [
  
  'http://lorempixel.com/400/200/',
    'http://lorempixel.com/g/400/200/',
    'http://lorempixel.com/400/200/sports/'
  
  ];
   
  const fadeProperties = {
    infinite: false,
    indicators: true,
    
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }
 
const Slideshow = () => {
    return (
      <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={imglorem[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={imglorem[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={imglorem[2]} />
          </div>
        </div>
      </Fade>
      </div>
    )
}

export default Slideshow;

