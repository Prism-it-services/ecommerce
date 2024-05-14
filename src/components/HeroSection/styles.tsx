// styles/HeroStyles.ts
import styled from 'styled-components';

export const HeroContainer = styled.div`
  background-image: url('/path/to/background.jpg');
  background-size: cover;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeroButton = styled.button`
  padding: 10px 20px;
  background-color: orange;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: darkorange;
  }
`;
