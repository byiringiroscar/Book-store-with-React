import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/" className="logo">Book store</Link>
    <ul>
      <li><Link to="/" className="nav-link">Home</Link></li>
      <li><Link to="/categories" className="nav-link">Categories</Link></li>
    </ul>
  </header>
);

export default Header;
