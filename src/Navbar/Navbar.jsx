import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
const Navbar = () => {
  let [isClicked, setIsClicked] = useState(false)

  let handleClick=(event)=>{
    setIsClicked(!isClicked)
  }
  return (
    <header className="navbarContainer">
        <div className='logo'>
        {/* <a href='#homepageContainer'></a> */}
        <Link to="/"><h1>Gym 101</h1></Link>
            
        </div>
        <div className="navLinks">
        {/* about , home , pricing , program */}
            <label onClick={handleClick}>
            {isClicked && <img id='close' src="assets/close.png" alt= "close"/> }
            {!isClicked && <img id='menu' src="assets/hamburger.png" alt= "close"/> }
            </label>
            <div className={isClicked?"menu-active":"menu-not-active"}>
              <a href="#homepageContainer">Home</a>
              <a href="#programContainter">Program</a>
              <a href="#pricingContainer">Pricing</a>
              <a href="#aboutContainer">About</a>
            </div>
        </div>
    </header>
  )
}

export default Navbar