import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollection from '../components/NewCollection/NewCollection'
import Subscribe from '../components/Subscribe/Subscribe'
import MovingImg from '../components/3dCrousel/MovingImg'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular />
        <Offers/>
        <NewCollection />
        <Subscribe/>
        <MovingImg />
    </div>
  )
}

export default Shop