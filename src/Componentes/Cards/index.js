import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css';


const Tarjetas = () => {
    return ( 
      <div>
<div className="row">
    <div className="col-4">
<Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src="http://lorempixel.com/400/200" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    
    </div>
    
<div className="col-4">
<Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src="http://lorempixel.com/400/200" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

</div>
</div>

<div className="column">
    <div className="col-12">
<Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src="http://lorempixel.com/400/200" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    
    </div> 
    
    
<div className="col-12">
<Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src="http://lorempixel.com/400/200" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

</div>
</div>

</div>
     );
}
 
export default Tarjetas;