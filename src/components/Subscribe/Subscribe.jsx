import React from 'react'
import './Subscribe.css'
const Subscribe = () => {
  return (
    <div className='newsLatter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe To Our NewsLetter and Get Updates</p>

        <div>
            <input type="email" placeholder='Enter Your Email ID'/>
            <button>Subscribe</button>
        </div>


    </div>
  )
}

export default Subscribe