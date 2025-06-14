import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import insta_logo from '../Assets/instagram_icon.png'
import pintester from '../Assets/pintester_icon.png'
import whatsApp from '../Assets/whatsapp_icon.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt="" />
                <p>Shopper</p>
            </div>
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={insta_logo} alt="" />
                </div>
                <div className="footer-icon-container">
                     <img src={pintester} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsApp} alt="" />
                </div>
                <div className="footer-copyright">
                    <hr />
                    <p> &copy; Shop-Now  &nbsp; 2025- All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer