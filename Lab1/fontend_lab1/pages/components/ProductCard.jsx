import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      {product.image && <Card.Img variant="top" src={product.image} />}
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
