// src/Cart.js
import React from 'react';

function Cart({ cartItems }) {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={cartStyle}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul style={listStyle}>
          {cartItems.map((item) => (
            <li key={item.id} style={itemStyle}>
              <h4>{item.name}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
}

const cartStyle = {
  padding: '20px',
  backgroundColor: '#fff',
  marginTop: '20px'
};

const listStyle = {
  listStyleType: 'none',
  padding: 0
};

const itemStyle = {
  borderBottom: '1px solid #ddd',
  paddingBottom: '10px',
  marginBottom: '10px'
};

export default Cart;
