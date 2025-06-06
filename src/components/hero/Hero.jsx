import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>

      <div className="hero-left">

        <h2>New arrivals Only</h2>
        <div className="hero-hand-icon">
          <p  className="newStyle" >New</p>
          {/* <img src={hand_icon} alt="" /> */}
          <p className="gradient-text">Collection</p>
          <p className="gradient-text">For Everyone</p>

        </div>
        <div className=" hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>

      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero