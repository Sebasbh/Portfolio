import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const linkStyle = { marginRight: '1rem' };
  return (
    <header style={{ padding: '1rem 0' }}>
      <h1>Sebas Portfolio</h1>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;

