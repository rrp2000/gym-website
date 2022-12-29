import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./about.css"

const About = () => {
  let navigate = useNavigate()
  return (
    <div id= "aboutContainer">
      <div className='about'></div>
      <div className='about-image'>
        <img src='assets/valery-sysoev-LDAirERNzew-unsplash.jpg' alt='aboutImage' />
      </div>
      <div className='about-details'>
        <ol>
          <li id='li-1'>Choose your service.</li>
          <li id='li-2'>Schedule your visit.</li>
          <li id='li-3'>Provide your info.</li>
        </ol>
        <button onClick={()=>{navigate("/about")}}>Know More</button>
      </div>
    </div>
  )
}

export default About