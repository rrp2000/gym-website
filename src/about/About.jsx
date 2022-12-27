import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./about.css"

const About = () => {
  let navigate = useNavigate()
  return (
    <div id= "aboutContainer">
      <div className='about-image'>
        <img src='assets/valery-sysoev-LDAirERNzew-unsplash.jpg' alt='aboutImage' />
      </div>
      <div className='about-details'>
        <ol>
          <li>Choose your service.</li>
          <li>Schedule your visit.</li>
          <li>Provide your info.</li>
        </ol>
        <button onClick={()=>{navigate("/about")}}>Know More</button>
      </div>
    </div>
  )
}

export default About