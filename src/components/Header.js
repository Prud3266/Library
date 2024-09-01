import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">LEat</Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;
