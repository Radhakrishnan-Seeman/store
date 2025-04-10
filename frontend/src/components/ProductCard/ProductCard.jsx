import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({cardDetails}) {console.log(cardDetails)

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{cardDetails.name}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;