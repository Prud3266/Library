// client/src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';  // Import the CSS file

function App() {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const enrollFingerprint = async () => {
    try {
      const response = await axios.post('/enroll', { studentId, name });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error enrolling fingerprint:', error);
      setMessage('Error enrolling fingerprint');
    }
  };

  const verifyFingerprint = async () => {
    try {
      const response = await axios.post('/verify');
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error verifying fingerprint:', error);
      setMessage('Error verifying fingerprint');
    }
  };

  const logExit = async () => {
    try {
      const response = await axios.post('/exit');
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error logging exit:', error);
      setMessage('Error logging exit');
    }
  };

  return (
    <div className="App">
      <h1>Library Fingerprint System</h1>
      <div>
        <h2>Enroll Fingerprint</h2>
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={enrollFingerprint}>Enroll</button>
      </div>
      <div>
        <h2>Verify Fingerprint</h2>
        <button onClick={verifyFingerprint}>Verify</button>
      </div>
      <div>
        <h2>Log Exit</h2>
        <button onClick={logExit}>Log Exit</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
