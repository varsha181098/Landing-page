import React from "react";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="contactUs-details">
      <div className="contactUs-headings-links">
        <h6 className="contactUs-heading">
          Ready to level up your tech skills? Let's chat about how we can help
          you reach your goals!
        </h6>
        <h4 className=" courses-enquire">
          <Link
            className="link1"
            to="https://docs.google.com/forms/d/e/1FAIpQLSe-WA3a8tcoNp_LUUxdhjpR9Uh0EN67r_iSf2qXiWr6HRrHXg/viewform"
          >
            Contact Us
          </Link>
        </h4>
      </div>
      <img
        src="https://gavitsandip.files.wordpress.com/2023/04/img_1.png?w=381"
        alt="error"
      />
      </div>
      <hr />
      <div>
       <div className="contactUs-whatsapp"> <h1>Get in Touch</h1>
        <h3>Connect with us On WhatsApp</h3>
        <Link className="link2" to="https://technohacks.bio.link/">
          Send a message on WhatsApp
        </Link></div>
        
        <div className="contactUs-contact">
        <p>Have any Questions?</p>
        <p>Call or WhatAapp Us on :</p>
        <h1>+91 8208937014</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
