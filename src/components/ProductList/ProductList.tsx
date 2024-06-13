// ProductList.tsx
import React from 'react';
import styled from 'styled-components';

interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
}

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductCard = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
`;

const products: Product[] = [
  { id: 1, name: 'Product 1', type: 'kitchen', price: 100 },
  { id: 2, name: 'Product 2', type: 'kitchen', price: 150 },
  { id: 3, name: 'Product 3', type: 'bathroom', price: 80 },
  // Add more products here
];

interface ProductListProps {
  productType: string;
  onProductClick: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ productType, onProductClick }) => {
  const filteredProducts = products.filter(product => product.type === productType);

  return (
    <ProductContainer>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} onClick={() => onProductClick(product)}>
          <img src={`path/to/image/${product.id}.jpg`} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </ProductCard>
      ))}
    </ProductContainer>
  );
};

export default ProductList;
