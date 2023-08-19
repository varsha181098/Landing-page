import React from 'react'
import TraningInternship from './TraningInternship'
import FreeInternship from './FreeInternship'
import PaidInternship from './PaidInternship'
const Internship = () => {
  return (
    <div className='internship'>
     <div className='intenship-heading-1'> <h2>Internship Opportunities </h2>
    <h1>Apply Now!</h1></div>
   <div className='internship-detail'>
   <TraningInternship/>
    <FreeInternship/>
    <PaidInternship />
   </div>
    </div>
  )
}

export default Internship
