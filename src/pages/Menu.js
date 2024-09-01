import React from 'react';
import './Menu.css';

function Menu() {
  const menuItems = [
    { id: 1, name: 'Burger', price: '$10', img: '/images/burger.jpg' },
    { id: 2, name: 'Pizza', price: '$12', img: '/images/pizza.jpg' },
    { id: 3, name: 'Sushi', price: '$15', img: '/images/sushi.jpg' },
    { id: 4, name: 'Pasta', price: '$11', img: '/images/pasta.jpg' },
    // Add more items as needed
  ];

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
