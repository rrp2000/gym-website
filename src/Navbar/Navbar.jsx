import React from 'react'
import style from "./navbar.module.css"
const Navbar = () => {
  return (
    <header className={style.navbarContainer}>
        <div className='logo'>
        <a href='#homepageContainer'><img src='https://t4.ftcdn.net/jpg/03/70/09/35/360_F_370093526_mJLYjlxn5Jb2pMsiQeyE7PMMnCp7NY8z.jpg' alt='logo' /></a>
            
        </div>
        <div className={style.navLinks}>
        {/* about , home , pricing , program */}
            <a href="#homepageContainer">home</a>
            <a href="#programContainter">program</a>
            <a href="#pricingContainer">pricing</a>
            <a href="#aboutContainer">about</a>
            
        </div>
    </header>
  )
}

export default Navbar