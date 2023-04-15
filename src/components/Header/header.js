import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/" className="logo">Book store</Link>
    <ul className="nav-links">
      <li><Link to="/" className="nav-link">Home</Link></li>
      <li><Link to="/categories" className="nav-link">Categories</Link></li>
    </ul>
    <button type="button" className="icon-button">
      <span className="material-icons primary-color">person</span>
    </button>
  </header>
);

export default Header;
