import  React, {useState, useEffect} from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import firebase from '../../firebase.js';

function useAparments (){
  const [aparments, setAparments] = useState([])

    useEffect(()=>{
      firebase
        .firestore()
        .collection('users')
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
    <div>
        {aparments.map((user)=>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={user.url} />
        <Card.Body>
        <Card.Title key={user.id}>{user.title}</Card.Title>
            <Card.Text>
              {user.name}
            </Card.Text>
           <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

        )}
    </div>
       
    
    
   );
}
 
export default BestApar;