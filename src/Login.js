// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' }
      };
      const body = JSON.stringify({ email, password });
      const res = await axios.post('/api/auth/login', body, config);
      console.log('User logged in successfully', res.data);
    } catch (err) {
      console.error('Error logging in', err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
      <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
