import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import './style.css';

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView className="img-car">
          <h3 className="h3-responsive texto-test">Hola</h3>
            <p className="texto-test">i nombre es Alejandra, tengo 22 años y desde que yo me acuerdo padecí cierto grado de sobrepeso. La verdad es que al inicio ni siquiera te das cu</p>
            </MDBView>
        </MDBCarouselItem>
        
        <MDBCarouselItem itemId="2">
          <MDBView  className="img-car">
          <h3 className="h3-responsive texto-test">Hola</h3>
            <p className="texto-test">i nombre es Alejandra, tengo 22 años y desde que yo me acuerdo padecí cierto grado de sobrepeso. La verdad es que al inicio ni siquiera te das cu</p>
            </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView  className="img-car">
          <h3 className="h3-responsive texto-test">Hola</h3>
            <p className="texto-test">i nombre es Alejandra, tengo 22 años y desde que yo me acuerdo padecí cierto grado de sobrepeso. La verdad es que al inicio ni siquiera te das cu</p>
            </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;