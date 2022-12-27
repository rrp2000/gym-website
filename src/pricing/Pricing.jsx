import React from 'react'
import "./pricing.css"
const Pricing = () => {
  return (
    <div id='pricingContainer'>
      <div className="cardContainer-pricing">
        <div className="card-pricing">
          <h1>Elite</h1>
          <div className="cardDetails-pricing">
            <ul>
              <li>At-center group classes</li>
              <li>All ELITE & PRO gyms</li>
              <li>At-home live workouts</li>
            </ul>
            <button>Try for free.</button>
          </div>
        </div>
        <div className="card-pricing">
          <h1>Pro</h1>
          <div className="cardDetails-pricing">
            <ul>
              <li>All PRO gyms</li>
              <li>2 Sessions/m at ELITE gyms & group classes</li>
              <li>At-home live workouts</li>
            </ul>
            <button>Try for free.</button>
          </div>
        </div>
        <div className="card-pricing">
          <h1>Home</h1>
          <div className="cardDetails-pricing">
            <ul>
              <li>At home workouts</li>
              <li>Celebrity Workouts</li>
              <li>Goal-based Workouts and Meditation Sesssions</li>
            </ul>
            <button>Try for free.</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing