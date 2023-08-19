import React from 'react'
import Images from './Images'
import { Link } from 'react-router-dom'
const PaidInternship = () => {
  return (
    <div className="traningInternship">
    <h2 className="traningInternship-heading">Training + Internships</h2>
    <p>Get Training with Internship Opportunities</p>
    <div className="traningInternship-details">
    <div className="courses-domains">
        <div className="courses-icons">
        <Images/>
          <span>Learn from industry experts</span>
        </div>
        <div className="courses-icons">
        <Images/>
          <span>Hands-on experience</span>
        </div>
        <div className="courses-icons">
        <Images/>
          <span>Customized training</span>
        </div>
        <div className="courses-icons">
        <Images/>
          <span>Internship Certificate</span>
        </div>
        <div className="courses-icons">
        <Images/>
          <span>Career guidance</span>
        </div>
        <div className="courses-icons">
        <Images/>
          <span>Affordable pricing</span>
        </div>
        <div className="courses-icons">
        <Images/>
          <span>Learn at your own pace</span>
        </div>
        <h4 className=" courses-enquire"><Link className="link1" to="https://docs.google.com/forms/d/e/1FAIpQLSe-WA3a8tcoNp_LUUxdhjpR9Uh0EN67r_iSf2qXiWr6HRrHXg/viewform">
     Apply Now
            </Link></h4>
      </div>
      </div>
  </div>
  )
}

export default PaidInternship
