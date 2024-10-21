// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';
// import './header.css';

// function Header() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear token from local storage
//     localStorage.removeItem("token");
    
//     // Display "Logging out..." toast message
//     const loggingOutToastId = toast.loading("Logging out...");

//     setTimeout(() => {
//       toast.dismiss(loggingOutToastId);
//       toast.success("Logged out successfully");
//       setTimeout(() => {
//         navigate("/login");
//       }); 
//     }, 2000);
//   };

//   return (
//     <header>
//       <Toaster position="top-center" reverseOrder={false} toastOptions={{ className: 'header-toaster-custom' }} />
//       <h1>Diary</h1>
//       <button className="header-button" onClick={handleLogout}>
//         <i className="fa fa-sign-out" style={{ fontSize: '20px' }}></i>Logout
//       </button>
//       <Link to="/" className="button-link">
//         <i className="fa fa-home" style={{ fontSize: '20px' }}></i>Home
//       </Link>
//     </header>
//   );
// }

// export default Header;
// Authentic





// temp->

import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import toast, { Toaster } from 'react-hot-toast';
import './header.css';

function Header({ id }) {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem("token");
    
    // Display "Logging out..." toast message
    const loggingOutToastId = toast.loading("Logging out...");

    setTimeout(() => {
      toast.dismiss(loggingOutToastId);
      toast.success("Logged out successfully");
      setTimeout(() => {
        navigate("/login");
      }, 1000); // Delay before navigating to the login page
    }, 1000); // Display "Logging out..." for 1 second
  };

  const currentRoute = location.pathname;

  return (
    <header id={id} className="header">
      <Toaster position="top-center" reverseOrder={false} toastOptions={{ className: 'header-toaster-custom' }} />
      <h1 className="header-title">Diary <i className="fa fa-book" style={{ fontSize: '40px' }}></i></h1>
      <div className="header-buttons">
            
        {token ? (
          <>
            <Link to="/" className="button-link">
              <i className="fa fa-home" style={{ fontSize: '20px' }}></i>Home
            </Link>
            <HashLink smooth to={`${currentRoute}#footer`} className="button-link">
              <i className="fa fa-info-circle" style={{ fontSize: '20px' }}></i>About
            </HashLink>
            <button className="header-button" onClick={handleLogout}>
              <i className="fa fa-sign-out" style={{ fontSize: '20px' }}></i>Logout
            </button>  
          </>
        ) : (
          <>

            <Link to="/register" className="register-button-link">
              <i className="fa fa-user-plus" style={{ fontSize: '20px' }}></i>Register
            </Link>
            <Link to="/login" className="login-button-link">
              <i className="fa fa-sign-in" style={{ fontSize: '20px' }}></i>Login
            </Link>
            <HashLink smooth to={`${currentRoute}#footer`} className="button-link">
              <i className="fa fa-info" style={{ fontSize: '20px' }}></i> About
            </HashLink>
          
          </>
        )}
      </div>
    </header>
  );
}

export default Header;