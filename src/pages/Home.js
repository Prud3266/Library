import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Import the new Home CSS

function Home() {
  return (
    <div className="container">
      <div className="home-content">
        <h1>Welcome to the Food Ordering App</h1>
        <p>Your favorite meals delivered to your door!</p>
        <Link to="/menu">
          <button className="cta-button">Browse Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
