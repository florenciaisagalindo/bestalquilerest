import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

const Car = () => {
  return (
    
<Carousel className="w-100">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/banner/puebita.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/banner/PlazaSanMartin18.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://lorempixel.com/400/200/"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src='http://lorempixel.com/400/200/'
      alt="cuarto slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  
 </Carousel>

    );
}
 
export default Car;
