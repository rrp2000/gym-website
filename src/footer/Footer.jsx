import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footerContainer'>
    Contact Us:
        <a href="https://github.com/rrp2000"><img src='/assets/github.png' alt='Github'/></a>
        <a href="https://www.linkedin.com/"><img src='/assets/linkedin.png' alt='LinkedIn'/></a>
        <a href="https://www.facebook.com/"><img src='/assets/facebook.png' alt='Facebook'/></a>
        <a href="https://www.instagram.com/"><img src='/assets/Instagram.png' alt='Instagram'/></a>
    </div>
  )
}

export default Footer