import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollection from '../components/NewCollection/NewCollection'
import Subscribe from '../components/Subscribe/Subscribe'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular />
        <Offers/>
        <NewCollection />
        <Subscribe/>
    </div>
  )
}

export default Shop