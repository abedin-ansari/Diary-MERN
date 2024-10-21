import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Login = ({ setAuthStatus }) => {
  document.body.classList.add('login-body');
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = loginData;

    if (!email || !password) {
      return toast.error("Input field should not be empty");
    } else if (password.length < 5) {
      return toast.error("Password must be at least 5 characters long");
    }

    const loadingToastId = toast.loading("Logging in...");

    setTimeout(async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/user/login', loginData, { withCredentials: true });

        const { message, token } = response.data;

        if (message === "Login successful" && token) {
          
          localStorage.setItem('token', token);
          
          setAuthStatus(true);
          toast.dismiss(loadingToastId);
          toast.success("Login successfully", {
            duration: 1000, 
          });
          setTimeout(() => {
            navigate('/content');
          }, 1000); 
        } else {
          toast.dismiss(loadingToastId);
          toast.error("Unable to login user");
        }
      } catch (error) {
        console.error('Login Error:', error);
        toast.dismiss(loadingToastId);
        toast.error("Unable to login user");
      }

      setLoginData({
        email: "",
        password: ""
      });
    }, 1000); 
  };

  return (
    <div className="login-container">
      <Toaster position="top-center" reverseOrder={false} toastOptions={{ className: 'toaster-custom' }} />
      
      <div className="login-drops">
        <div className="login-drop login-drop-1"></div>
        <div className="login-drop login-drop-2"></div>
        <div className="login-drop login-drop-3"></div>
        <div className="login-drop login-drop-4"></div>
        <div className="login-drop login-drop-5"></div>
      </div>
      
      <h2>Login Form</h2>
      <form className='login-form' onSubmit={handleLoginSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleLoginChange}
          value={loginData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleLoginChange}
          value={loginData.password}
          required
        />
        <input type="submit" value="Sign-in" />
      </form>
      <p>Not registered yet? <Link to="/register">Register here</Link></p>
      <p><Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link></p>
    </div>
  );
};

export default Login;