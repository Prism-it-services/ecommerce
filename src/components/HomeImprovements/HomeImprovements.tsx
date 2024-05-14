

import React from 'react';
import styled from 'styled-components';

// Example product data
const products = [
  {
    id: 1,
    name: '10pcs Shower Nozzle Cleaning Brush Set',
    image: '/assets/shower-nozzle.jpg', // ensure the path is correct
    price: '39.00',
    originalPrice: '49.00'
  },
  {
    id: 2,
    name: '2-Meter Kitchen Sink Platform Sticker',
    image: '/assets/kitchen-sticker.jpg',
    price: '79.00',
    originalPrice: '249.00'
  },
  
  {
    id: 3,
    name: 'Home Curtains',
    image: '/assets/home-curtains.jpg',
    price: '55.00',
    originalPrice: '245.00'
  },
  
  {
    id: 4,
    name: 'Chopping Board',
    image: '/assets/chopping-board.jpg',
    price: '60.00',
    originalPrice: '150.00'
  },
  
  {
    id: 5,
    name: 'Shoe Rack',
    image: '/assets/shoe-rack.jpg',
    price: '179.00',
    originalPrice: '425.00'
  },
  
  {
    id: 6,
    name: 'Antique Key Holder',
    image: '/assets/antique-key-holder.jpg',
    price: '180.00',
    originalPrice: '200.00'
  },
  {
    id: 7,
    name: 'Deer Shaped Jewellery Stand',
    image: '/assets/deer-shaped-jewellery-stand.jpg',
    price: '350.00',
    originalPrice: '550.00'
  },
  {
    id: 8,
    name: 'LED String Lights',
    image: '/assets/led-string-lights.jpg',
    price: '120.00',
    originalPrice: '660.00'
  },
  {
    id: 8,
    name: 'Shower Nozzle New',
    image: '/assets/shower-nozzle.jpg', // ensure the path is correct
    price: '39.00',
    originalPrice: '49.00'
  },
  
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductCard = styled.div`
  width: 180px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductName = styled.p`
  font-size: 14px;
`;

const Price = styled.span`
  color: red;
  font-weight: bold;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  margin-left: 5px;
  color: grey;
`;

const AddToCartButton = styled.button`
  background-color: purple;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 8px;
`;

export const HomeImprovements = () => {
  return (
    <Container>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <p>
            <Price>₹{product.price}</Price>
            <OriginalPrice>₹{product.originalPrice}</OriginalPrice>
          </p>
          <AddToCartButton>Add to Cart</AddToCartButton>
        </ProductCard>
      ))}
    </Container>
  );
};

//export default HomeImprovements;
