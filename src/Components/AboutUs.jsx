import React from "react";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs-details">
        <h1>TECHNOHACKS EDUTECH</h1>
        <h3>Let's Grow Together</h3>
        <h3>An ISO 9001:2015 Certified Company</h3>
        <p>
          We provide top-notch IT training and cutting-edge products to help
          businesses and individuals stay ahead in the ever-evolving tech
          landscape. Our team of experts is dedicated to helping you achieve
          your goals and reach your full potential.
        </p>

       <div className="link3-details">
       <Link className="link3" to="/courses">
          Courses
        </Link>

        <Link className="link3" to="/services">
          Internship
        </Link>
       </div>
      </div>
      <div className="aboutUs-image">
        <img
          src="https://preview.uideck.com/items/slick/business/img/intro.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
