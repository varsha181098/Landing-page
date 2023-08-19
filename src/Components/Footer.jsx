import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <a href="https://technohacks.co.in/">
      <img
        className="logo"
        src="	https://gavitsandip.files.wordpress.com/2023/04/logo-final-transperrant-black-theme-3-1.png"
        alt="error"
        width="120px"
      /></a>
      <div>
        <h2>Nashik, Maharashtra India 422001</h2>
        <h2>info.technohacks@gmail.com</h2>
        <h2>+91 8208937014</h2>
      </div>
      <div className="footer-services">
        <li>
          <Link className="link" to="/services">
            Services
          </Link>
        </li>

        <li>
          <Link className="link" to="/product">
            Courses
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Internships
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            ContactUs
          </Link>
        </li>
      </div>
     
              <div className="social-icon">
                <div className="social-icon-1">
                <a href="https://www.linkedin.com/company/technohacks-edutech/">
                  <img
                    class="icon"
                    src="https://static.thenounproject.com/png/5946437-200.png"
                    alt=""
                    width="30px"/>
                </a>
                </div>
             
              <div className="social-icon-2">
                <a href="https://technohacks.co.in/">
                  <img
                    class="icon"
                    src="https://static.thenounproject.com/png/5946437-200.png"
                    alt="" width="30px"/>
                </a>
              </div>
              <div className="social-icon-3">
                <a href="https://www.youtube.com/channel/UCwuh25VS9J9ApJ7Yomw_Lqw">
                  <img
                    class="icon"
                    src="https://static.thenounproject.com/png/5946437-200.png"
                    alt=""width="30px"/>
                </a>
              </div>
              <div className="social-icon-3">
                <a href="https://technohacks.co.in/">
                  <img
                    class="icon"
                    src="https://static.thenounproject.com/png/5946437-200.png"
                    alt=""width="30px"/>
                </a>
              </div>
            </div>
            </div>
        
  );
};

export default Footer;
