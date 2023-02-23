import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Homecard(props) {
  return (
    <Card style={{ width: '20rem', height:'10rem'}}>
      
      <Card.Body className='d-flex align-items-center'>
      <Card.Img variant="top" src={props.imgsrc} style={{height:'100px',width:'100px'}} />
      <div>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Homecard;