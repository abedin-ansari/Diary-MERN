import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Content from './Pages/Content';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          const response = await axios.post(
            'http://localhost:8000/api/validate-token', 
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          
          if (response.data.isValid) {
            setIsLoggedIn(true);
          } else {
            localStorage.removeItem('token');
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error('Token validation failed', error);
          localStorage.removeItem('token');
          setIsLoggedIn(false);
        }
      }
      setLoading(false);
    };

    checkToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login setAuthStatus={setIsLoggedIn} />} // Pass setAuthStatus prop to Login component
        />
        <Route
          path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path='/reset-password/:token' element={<ResetPassword />} />
        <Route
          path="/content"
          element={isLoggedIn ? <Content /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
