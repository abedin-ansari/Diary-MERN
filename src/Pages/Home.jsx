// import React from 'react';
// import './home.css';

// const Home = () => {
//   document.body.classList.add('home-body');

//   return (
//     <div className="home-container">
//     <div></div>
//       <h2 className="home-heading">Welcome to ToDo App</h2>
//       <p className="home-description">This is a simple ToDo app where you can manage your tasks efficiently.</p>
//       <p className="home-cta">Please <a href="/register">register</a> or <a href="/login">login</a> to get started.</p>
//     </div>
//   );
// }
// export default Home;



//temp
// import React from 'react';
// import './home.css';
// import Header from "../components/Header"; // Import the Header component

// const Home = () => {
//   const token = localStorage.getItem('token');

//   return (
//     <div className="home-body">
//       <Header id="home-header" />
//       <div className="home-container">
//         <h2 className="home-heading">Welcome to Diary Website</h2>
//         <p className="home-description">This is a simple Diary app where you can manage your tasks efficiently.</p>
//         {token ? (
//           <p className="home-cta">
//             You are logged in. Go to <a href="/content">Diary</a> to manage your notes.
//           </p>
//         ) : ""
//       }
//       </div>
//     </div>
//   );
// };

// export default Home;





// import React from 'react';
// import './home.css';
// import Header from "../components/Header";
// import Footer from '../components/Footer';

// const Home = () => {
//   const token = localStorage.getItem('token');

//   return (
//     <div className="home-body">
//       <Header id="home-header" />
//       <div className="home-container">
//         <h2 className="home-heading">Welcome to Diary Website</h2>
//         <p className="home-description">This is a simple Diary app where you can manage your tasks efficiently.</p>
        
//         <div className="home-content">
//           <h3>About Our Diary App</h3>
//           <p>Our Diary App provides you with a seamless experience to jot down your thoughts, manage your tasks, and keep track of important events. It's designed to be your digital companion, offering a user-friendly interface and powerful features.</p>
          
//           <h3>Features</h3>
//           <ul>
//             <li>Create, edit, and delete notes effortlessly</li>
//             <li>Organize your notes with categories and tags</li>
//             <li>Secure login and data protection</li>
//             <li>Access your notes from anywhere</li>
//             <li>Beautiful and intuitive design</li>
//           </ul>
          
//           <h3>Get Started</h3>
//           <p>To start using our Diary App, please register or log in. Once logged in, you can access your personal diary and start managing your notes.</p>
//         </div>
        
//         {token ? (
//           <p className="home-cta">
//             You are logged in. Go to <a href="/content">Diary</a> to manage your notes.
//           </p>
//         ) : (
//           <p className="home-cta">
//             Please <a href="/register">register</a> or <a href="/login">login</a> to get started.
//           </p>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;


import React, { useEffect } from 'react';
import './home.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (window.location.hash === "#footer") {
      document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="home-body">

      <div className="snow"></div>

      <Header id="home-header" />
      <div className="home-container">
        <h2 className="home-heading">Welcome to Diary Website</h2>
        <p className="home-description">This is a simple Diary app where you can manage your tasks efficiently.</p>
        
        <div className="home-content">
          <h3>About Our Diary App</h3>
          <p>Our Diary App provides you with a seamless experience to jot down your thoughts, manage your tasks, and keep track of important events. It's designed to be your digital companion, offering a user-friendly interface and powerful features.</p>
          
          <h3>Features</h3>
          <ul>
            <li>Create, edit, and delete notes effortlessly</li>
            <li>Organize your notes with categories and tags</li>
            <li>Secure login and data protection</li>
            <li>Access your notes from anywhere</li>
            <li>Beautiful and intuitive design</li>
          </ul>
          
          <h3>Get Started</h3>
          <p>To start using our Diary App, please register or log in. Once logged in, you can access your personal diary and start managing your notes.</p>
        </div>
        
        {token ? (
          <p className="home-cta">
            You are logged in. Go to <a href="/content">Diary</a> to manage your notes.
          </p>
        ) : (
          <p className="home-cta">
            Please <a href="/register">register</a> or <a href="/login">login</a> to get started.
          </p>
        )}
      </div>
      <Footer id="footer" />
    </div>
  );
};

export default Home;
