import React from 'react'
import "./hompage.css"


const Homepage = () => {
  return (
    <div id="homepageContainer">
        <p>Are you ready to change yourself?</p>
        <button onClick={()=>{document.getElementById("pricingContainer").scrollIntoView()}}>Get Started</button>
    </div>
  )
}

export default Homepage