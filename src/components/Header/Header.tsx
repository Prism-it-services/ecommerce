// components/Header.tsx
import React from 'react';
import { HeaderContainer, Logo, NavLinks } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/path/to/logo.png" alt="Site Logo" />
      <NavLinks>
        <ul>
          <li><a href="home-improvements">Home Improvements</a></li>
          <li><a href="electronics">Electronics</a></li>
          <li><a href="personal-care">Personal Care</a></li>
          <li><a href="fashion">Fashion</a></li>
          <li><a href="gift">Gift</a></li>
          <li><a href="products">Products</a></li>
          <li><a href="about-us">About US</a></li>
          <li><a href="contact-us">Contact US</a></li>
        </ul>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
