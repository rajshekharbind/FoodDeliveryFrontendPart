import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img src={assets.logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere aliquam quisquam quam dicta, laboriosam
                 ipsam nam! Veniam, expedita 
                 aspernatur!</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                 </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
                </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91-9170879955</li>
                <li>raju.rajshekhar43123@gmail.com</li>
                <li>linkedin@gmail.com</li>
                <li>instagramid@gmail.com</li>
              </ul>
            </div>
        </div>
        <hr />
       <p className="footer-coppyright">Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
