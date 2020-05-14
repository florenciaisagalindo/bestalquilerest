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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/banner/PlazaSanMartin18.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://lorempixel.com/400/200/"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src='http://lorempixel.com/400/200/'
      alt="cuarto slide"
    />

    <Carousel.Caption>
      <h3>cuarto slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
 </Carousel>

    );
}
 
export default Car;
