// styles/HeaderStyles.ts
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #6A1B9A; // Example purple background
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const NavLinks = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;

    li {
      a {
        color: white;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
