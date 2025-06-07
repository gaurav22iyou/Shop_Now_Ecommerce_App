import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [menu, setMenu] = useState("shop")


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
       <Link style={{textDecoration:"none"}} to={"/"}><p className='logoTitle'>Shop-Now</p></Link> 
      </div>

      <ul className="nav-links">
        <li onClick={() => { return setMenu("shop") }}><Link style={{textDecoration:"none"}} to={"/"}>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { return setMenu("men") }}><Link style={{textDecoration:"none"}} to={"/men"}>Mens</Link>   {menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => { return setMenu("women") }}><Link style={{textDecoration:"none"}} to={"/women"}>Women</Link> {menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => { return setMenu("kid") }}><Link style={{textDecoration:"none"}} to={"/kid"}>Kids</Link> {menu === "kid" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-cart-icon">
       <Link to={"/login"}><button>Login</button></Link> 
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  
    
  )
}

export default Navbar