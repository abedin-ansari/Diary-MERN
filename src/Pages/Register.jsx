import React, { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  document.body.classList.add('register-body');
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleRegistrationChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();

    const { username, email, password } = registerData;

    if (!username || !email || !password) {
      return toast.error("Input field should not be empty");
    } else if (password.length < 5) {
      return toast.error("Password must be at least 5 characters long");
    }

    const loadingToastId = toast.loading("Registering...");

    setTimeout(async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/user/register', registerData);

        const { message } = response.data;

        if (message === "User registered successfully") {
          toast.dismiss(loadingToastId);
          toast.success("Registered successfully! Please Login to proceed.", {
            duration: 1000, 
          });
          setTimeout(() => {
            navigate('/login');
          }, 1000); 
        } else {
          
          toast.dismiss(loadingToastId);
          toast.error("Unable to register user");
        }
      } catch (error) {
        console.error('Registration Error:', error);
        toast.dismiss(loadingToastId);
        toast.error("Unable to register user");
      }

      setRegisterData({
        username: "",
        email: "",
        password: ""
      });
    }, 1000); 
  };

  return (
    <div className="register-container">
      <Toaster position="top-center" reverseOrder={false} toastOptions={{ className: 'toaster-custom' }} />

      <div className="register-drops">
        <div className="register-drop register-drop-1"></div>
        <div className="register-drop register-drop-2"></div>
        <div className="register-drop register-drop-3"></div>
        <div className="register-drop register-drop-4"></div>
        <div className="register-drop register-drop-5"></div>
      </div>

      <h2>Registration Form</h2>
      <form className="register-form" onSubmit={handleRegistrationSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleRegistrationChange}
          value={registerData.username}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleRegistrationChange}
          value={registerData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleRegistrationChange}
          value={registerData.password}
          required
        />
        <input type="submit" value="Register"></input>
      </form>
      <p>Already registered? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Register;
