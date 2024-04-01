import React from 'react';
import { Link } from 'react-router-dom';
import { RiWhatsappFill } from "react-icons/ri";
import './hero.css'
function Hero() {
  return (
    <div className="hero__container">
        <div className="hero__content">
            <div className="hero__left">
                <span>Welcome to DeonJ GLOBAL Resources Ltd</span>
                <h1>Your Gateway to Premium Quality Solid Minerals, Agro Products, and Contracting Services</h1>
                <Link to='https://wa.me/+2349051043492?text=Hello%20Deonj%20Global!
                    ' className='hero__button'>
                    Reach us on WhatsApp 
                    <RiWhatsappFill className='heroW__icon' />
                </Link>
            </div>
            <div className="hero__right">
                <img src="./assets/hero-img-1.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero