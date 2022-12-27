import React, { useState } from 'react'
import "./navbar.css"
const Navbar = () => {
  let [isClicked, setIsClicked] = useState(false)

  let handleClick=(event)=>{
    setIsClicked(!isClicked)
  }
  return (
    <header className="navbarContainer">
        <div className='logo'>
        <a href='#homepageContainer'><h1>Gym 101</h1></a>
            
        </div>
        <div className="navLinks">
        {/* about , home , pricing , program */}
            <label onClick={handleClick}>
            {isClicked && <img id='close' src="assets/close.png" alt= "close"/> }
            {!isClicked && <img id='menu' src="assets/hamburger.png" alt= "close"/> }
            </label>
            <div className={isClicked?"menu-active":"menu-not-active"}>
              <a href="#homepageContainer">home</a>
              <a href="#programContainter">program</a>
              <a href="#pricingContainer">pricing</a>
              <a href="#aboutContainer">about</a>
            </div>
        </div>
    </header>
  )
}

export default Navbar