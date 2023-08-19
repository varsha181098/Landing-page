import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <a href="https://technohacks.co.in/">
      <img
        className="logo"
        src="	https://gavitsandip.files.wordpress.com/2023/04/logo-final-transperrant-black-theme-3-1.png"
        alt="error"
        width="120px"
      /></a>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="link" to="/aboutUs">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/courses">
              Courses
            </Link>
          </li>
          <li>
            <Link className="link" to="/services">
              Internship
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              ContactUs
            </Link>
          </li>
          <li>
            <Link className="link" to="https://www.linkedin.com/company/technohacks-edutech/">
              Connect on LinkedIn
            </Link>
          </li>
          <li>
            <Link className="link" to="https://technohacks.bio.link/">
              JOIN US
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
