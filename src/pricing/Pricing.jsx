import React from 'react'
import "./pricing.css"
const Pricing = () => {
  return (
    <div id='pricingContainer'>
      <h2>See what best fit your needs....</h2>
      <div className="cardContainer-pricing">
        <div className="card-pricing" id ="gold" >
          <h1>Elite</h1>
          <img src='/assets/gold-medal.png' alt='gold' />
          <div className="cardDetails-pricing">
            <ul>
              <li>At-center group classes</li>
              <li>All ELITE & PRO gyms</li>
              <li>At-home live workouts</li>
            </ul>
            <button>Try for free.</button>
          </div>
        </div>
        <div className="card-pricing" id='siver'>
          <h1>Pro</h1>
          <img  src='/assets/silver-medal.png' alt='silver' />
          <div className="cardDetails-pricing">
            <ul>
              <li>All PRO gyms</li>
              <li>2 Sessions/m at ELITE gyms & group classes</li>
              <li>At-home live workouts</li>
            </ul>
            <button>Try for free.</button>
          </div>
        </div>
        <div className="card-pricing" id='bronze'>
          <h1>Home</h1>
          <img  src='/assets/bronze-medal.png' alt='bronze' />
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