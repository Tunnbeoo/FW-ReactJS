import React from 'react';
import ProductCard from './components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const products = [
  { name: 'Product 1', image: 'https://via.placeholder.com/150', description: 'This is a description of product 1' },
  { name: 'Product 2', image: 'https://via.placeholder.com/150', description: 'This is a description of product 2' },
  // Thêm các sản phẩm khác vào đây
];

const HomePage = () => {
  return (
    <Container>
      <h1 className="my-4">Products</h1>
      <Row>
        {products.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
