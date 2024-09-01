// src/MenuList.js
import React from 'react';

function MenuList({ addToCart }) {
  const menuItems = [
    {
      id: 1,
      name: 'Pizza Margherita',
      description: 'Classic cheese pizza',
      price: 8.99,
      imageUrl: 'https://via.placeholder.com/150?text=Pizza'
    },
    {
      id: 2,
      name: 'Cheeseburger',
      description: 'With lettuce, tomato, and cheese',
      price: 6.99,
      imageUrl: 'https://via.placeholder.com/150?text=Cheeseburger'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Romaine, croutons, and parmesan',
      price: 599,
      imageUrl: 'https://via.placeholder.com/150?text=Salad'
    },
    {
      id: 4,
      name: 'Spaghetti Carbonara',
      description: 'Rich and creamy pasta dish',
      price: 1000,
      imageUrl: 'https://via.placeholder.com/150?text=Pasta'
    }
  ];

  return (
    <div style={menuStyle}>
      <h2>Our Menu</h2>
      <ul style={listStyle}>
        {menuItems.map((item) => (
          <li key={item.id} style={itemStyle}>
            <img src={item.imageUrl} alt={item.name} style={imageStyle} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>#{item.price.toFixed(2)}</p>
              <button style={buttonStyle} onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const menuStyle = {
  padding: '20px',
  backgroundColor: '#fff'
};

const listStyle = {
  listStyleType: 'none',
  padding: 0
};

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #ddd',
  paddingBottom: '10px',
  marginBottom: '10px'
};

const imageStyle = {
  width: '150px',
  height: '150px',
  marginRight: '20px',
  objectFit: 'cover',
  borderRadius: '8px'
};

const buttonStyle = {
  padding: '5px 10px',
  backgroundColor: '#f8b400',
  color: '#fff',
  border: 'none',
  cursor: 'pointer'
};

export default MenuList;
