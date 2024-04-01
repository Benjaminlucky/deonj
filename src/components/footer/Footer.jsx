import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {menuLinks} from '../../data.js'
import { Link, useLocation } from 'react-router-dom';
import './footer.css';

function Footer() {
    const location = useLocation()
  return (
    <div className="footer__section">
        <div className="footer__wrapper">
            <div className="footer__content">
                <div className="footer__left">
                    <div className="deonj__logo">
                        <img src="./assets/deonj-logo.png" alt="Deonj Global Logo" /> 
                    </div>
                    <div className="social__handles">
                            <Link to='/'><FaInstagram className='socialIcon' /></Link>
                            <Link to='/'><FaLinkedin className='socialIcon' /></Link>
                            <Link to='/'><FaXTwitter className='socialIcon' /></Link>
                    </div>
                </div>
                <div className="footer__right">
                    <div className="quick__links">
                                { 
                                menuLinks.map((link, index) => (
                                    <Link to={link.path} key={index}>{link.label}</Link>
                                ))
                                }
                    </div>

                    <div className="copyrights">
                        <p className='gold'>Copyright © 2024 Deon J GLOBAL Resources Ltd. All rights reserved.</p>
                        <span>Developed by Inspireme Media Networks</span>
                    </div>
                </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Footer