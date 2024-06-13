// ProductDetail.tsx
import React from 'react';
import styled from 'styled-components';

interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
}

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
`;

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <DetailContainer>
      <Image src={`path/to/image/${product.id}.jpg`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={onClose}>Close</button>
    </DetailContainer>
  );
};

export default ProductDetail;
