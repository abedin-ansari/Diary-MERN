import React, { useState } from 'react';
import './forgotPassword.css';
import axios from 'axios';

const ForgotPassword = () => {

  document.body.classList.add('Fpassw-body');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleForgotPasswordSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/user/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error sending password reset email');
      console.error('Forgot Password Error:', error);
    }
  };

  return (
    <div className="forgot-password-container">
    <div className="Fpassw-drops">
        <div className="Fpassw-drop Fpassw-drop-1"></div>
        <div className="Fpassw-drop Fpassw-drop-2"></div>
    </div>
      <h2>Forgot Password</h2>
      <form className="forgot-password-form" onSubmit={handleForgotPasswordSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
          required
        />
        <input type="submit" value="Send Reset Link" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
