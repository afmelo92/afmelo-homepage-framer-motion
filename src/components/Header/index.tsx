import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import greenLogo from '../../assets/green_triangle.png';

import { Container } from './styles';

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const headerY = useTransform(scrollYProgress, [0.05, 0.06], ['0%', '-100%']);

  return (
    <Container style={{ y: headerY }}>
      <nav>
        <div className="nav-items">
          <div className="logo">
            <img src={greenLogo} alt="afmelo-logo" />
            <h1>AFMELO</h1>
          </div>

          <div className="nav-link-row">
            <a href="/">Home</a>
            <a href="/">Projects</a>
            <a href="/">Contact</a>
            <button type="button">Login</button>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
