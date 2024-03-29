import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuLinks } from '../../data';
import { IoMenu } from "react-icons/io5";
import './navmenu.css';

function Navmenu() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <main className={`nav__section ${isMenuOpen ? 'open' : ''}`}>
            <div className="nav__wrapper">
                <div className="nav__content">
                    <div className="nav__logo">
                        <Link to='/'>
                            <img src="./assets/deonj-logo.png" alt="Deonj Global Logo" />
                        </Link>
                    </div>
                    <div className={`nav__menu ${isMenuOpen ? 'open' : ''}`}>
                        {
                            menuLinks.map((link, index) => (
                                <Link key={index} to={link.path} onClick={toggleMenu}
                                    className={`menu__links ${location.pathname === link.path ? 'active' : ''}`}>{link.label}</Link>
                            ))
                        }
                    </div>
                    <div className="mobile__menu" onClick={toggleMenu}>
                        <IoMenu className='icon' />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Navmenu;
