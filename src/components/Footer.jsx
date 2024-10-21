// // import React from "react";
// // import './footer.css';

// // function Footer() {
// //   const year = new Date().getFullYear();
// //   return (
// //     <footer>
// //       <p>Copyright ⓒ {year}</p>
// //     </footer>
// //   );
// // }

// // export default Footer;

// import React from "react";
// import './footer.css';

// function Footer() {
//   const year = new Date().getFullYear();
//   return (
//     <footer className="footer">
//       <div className="footer-about">
//         <h3>About Our Diary App</h3>
//         <p>
//           Our Diary App is a user-friendly platform designed to help you keep track of your thoughts, tasks, and important events.
//           With seamless note creation and organization features, it provides a perfect digital companion for your daily life.
//           Stay organized and secure with our powerful and intuitive Diary App.
//         </p>
//       </div>
//       <p className="footer-copyright">Copyright ⓒ {year}</p>
//     </footer>
//   );
// }

// export default Footer;

// import React from 'react';
// import './footer.css';

// function Footer() {
//     const usefulLinks = [
//         'Home',
//         'Movies',
//         'My List',
//         'Terms of Service',
//         'Privacy Policy',
//     ];

//     const locations = [
//         'Location 1',
//         'Location 2',
//         'Location 3',
//         'Location 4',
//         'Location 5',
//     ];

//     return (
//         <footer id="footer" className="footer">
//             <div className="footer-top">
//                 <div className="container">
//                     <div className="row gy-4">
//                         <div className="col-lg-5 col-md-12 footer-info">
//                             <a href="/" className="logo d-flex align-items-center">
//                                 <span>DIARY</span>
//                             </a>
//                             <p>
//                                 Our Diary App provides you with a seamless experience to jot down your thoughts, manage your tasks, and keep track of important events. It's designed to be your digital companion, offering a user-friendly interface and powerful features.
//                             </p>
//                             <div className="social-links mt-3">
//                                 <a href="#" className="twitter">
//                                     <i className="fa fa-twitter"></i>
//                                 </a>
//                                 <a href="#" className="facebook">
//                                     <i className="fa fa-facebook"></i>
//                                 </a>
//                                 <a href="#" className="instagram">
//                                     <i className="fa fa-instagram"></i>
//                                 </a>
//                                 <a href="#" className="linkedin">
//                                     <i className="fa fa-linkedin"></i>
//                                 </a>
//                             </div>
//                         </div>

//                         <div className="col-lg-2 col-6 footer-links">
//                             <h4>Useful Links</h4>
//                             <ul>
//                                 {usefulLinks.map(link => (
//                                     <li key={link}><a href="#">{link}</a></li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div className="col-lg-2 col-6 footer-links">
//                             <h4>Our Locations</h4>
//                             <ul>
//                                 {locations.map(location => (
//                                     <li key={location}><a href="#">{location}</a></li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
//                             <h4>Contact Us</h4>
//                             <p>
//                                 Street <br />
//                                 City, State, 462000 <br />
//                                 India <br /><br />
//                                 <strong>Phone:</strong> +91 498348589 <br />
//                                 <strong>Email:</strong> xyz@gmail.com <br />
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="copyright">
//                     &copy; Copyright <strong><span>Dstudio Technology</span></strong>. All Rights Reserved
//                 </div>
//                 <div className="credits">
//                     Designed by <a href="#">Abedin❤️</a>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;



import React, { useState } from 'react';
import './footer.css';

function Footer({ id }) {
    const [showEmail, setShowEmail] = useState(false);

    const handleContactClick = () => {
        setShowEmail(true);
    };

    return (
        <footer id="footer" className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="#" className="logo d-flex align-items-center">
                                <span>DIARY</span>
                            </a>
                            <p>
                                Our Diary App provides you with a seamless experience to jot down your thoughts, manage your tasks, and keep track of important events. It's designed to be your digital companion, offering a user-friendly interface and powerful features.
                            </p>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#" className="facebook">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="#" className="instagram">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a href="#" className="linkedin">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                <a href="mailto:jainu@gmail.com" className="contact-link">Click here to contact us</a>
                            </p>
                            {showEmail && (
                                <p>
                                    <strong>Email:</strong> <a href="mailto:jainulansari579@gmail.com">jainulansari579@gmail.com</a>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="foot-container">
                <div className="copyright">
                    &copy; Copyright <strong><span>Dstudio Technology</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="#">Abedin❤️</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
