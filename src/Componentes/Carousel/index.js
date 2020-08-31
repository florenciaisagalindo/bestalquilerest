import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

const Car = () => {
  return (
    
<Carousel className="w-100">
  <Carousel.Item>
    <img
      className="d-block w-100" id="car-landing"
      src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/fotos%2F03.jpg?alt=media&token=201da1f7-e720-4209-bc3c-37fb44fb008d"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" id="car-landing"
      src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/fotos%2F02.jpg?alt=media&token=5ecb19ac-f8cb-4b74-935f-b4432caac3df"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" id="car-landing"
      src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/fotos%2F01.jpg?alt=media&token=c40f01f0-0dc3-46e6-8f89-9e085fb5a34d"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100" id="car-landing"
      src='https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/fotos%2F06.jpg?alt=media&token=a2dd2bfb-62d7-4748-8a1d-e3091b967f14'
      alt="cuarto slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  
 </Carousel>

    );
}
 
export default Car;
