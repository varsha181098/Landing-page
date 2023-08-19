import React from "react";
import Images from "./Images";
const Courses = () => {
  return (
    <div className="courses">
      <div className="courses-details">
        <h1 className="courses-heading-1">LOOKING TO LEVEL UP YOUR TECH SKILLS?</h1>
        <h2 className="courses-heading-2">Join TechnoHacks Live Training Programs</h2>
        <p className="courses-para-1">
          Check out our cutting-edge courses designed to help you thrive in the
          digital age
        </p>
        <div className="courses-domains">
          <h2>Domains :</h2>
          <div className="courses-icons">
          <Images/>
            <span>Programming</span>
          </div>
          <div className="courses-icons">
          <Images/>
            <span>Development</span>
          </div>
          <div className="courses-icons">
          <Images/>
            <span>Cybersecurity</span>
          </div>
          <div className="courses-icons">
          <Images/>
            <span>Digital Marketing</span>
          </div>
          <h4 className=" courses-enquire">Enquire Now</h4>
        </div>
      </div>
      <div className="courses-images">
        <img
          className="courses-image"
          src="https://technohacks.co.in/files/img_4.png"
          alt="error"
        />
      </div>
    </div>
  );
};

export default Courses;
