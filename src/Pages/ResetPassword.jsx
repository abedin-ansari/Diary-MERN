import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './resetPassword.css';

const ResetPassword = () => {

  document.body.classList.add('Reset-body'); 
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8000/api/user/reset-password/${token}`, { password });
      setMessage(response.data.message);
      // Reset the form
      setPassword('');
      setConfirmPassword('');
      
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      setMessage('Error resetting password');
    }
  };

  return (
    <div className="reset-password-container">
    <div className="Reset-drops">
        <div className="Reset-drop Reset-drop-1"></div>
        <div className="Reset-drop Reset-drop-2"></div>
    </div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit} className="reset-password-form">
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        <input type="submit" value="Reset Password"></input>
        {/* <button type="submit">Reset Password</button> */}
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
