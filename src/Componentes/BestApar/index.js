import  React, {useState, useEffect} from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import FontAwesome from 'react-fontawesome';
import firebase from '../../firebase.js';

function useAparments (){
  const [aparments, setAparments] = useState([])

    useEffect(()=>{
      firebase
        .firestore()
        .collection('bestap')
        .onSnapshot((snapshot)=>{
          const newAparments = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
          }))
        
        setAparments(newAparments)
        })
      }, [])
      
    return aparments
}



const BestApar = () => {

  const aparments = useAparments()

  return ( 
    <>
    <div className="contenedorP" >
        {aparments.map((bestap)=>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={bestap.foto1} />
        <Card.Body>
        <Card.Title key={bestap.id}>{bestap.titulo}</Card.Title>
            <Card.Text>
              Desde ${bestap.precio} por noche <br/>
              <FontAwesome className="fas fa-bed" name="bed" size="1x" style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> {bestap.camas} |  <FontAwesome className="fas fa-bath" name="bath" size="1x" style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> {bestap.banios} | 
            </Card.Text>
        </Card.Body>
      </Card>
    
        )}
    </div>
       
    </>
   );
}
 
export default BestApar;