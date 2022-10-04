import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.svg';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="section header">
            <div className="section-inner">
                <img src={logo} alt="Fensweet logo" />
                <div className="menu-wrap">
                    <div className="main-menu">
                        <NavLink to="/" className="text-semi-bold active">Home</NavLink>
                        <NavLink to="/" className="text-semi-bold">About us</NavLink>
                        <NavLink to="/" className="text-semi-bold">Features</NavLink>
                        <NavLink to="/" className="text-semi-bold">Pricing</NavLink>
                        <NavLink to="/" className="text-semi-bold">FAQ</NavLink>
                        <NavLink to="/" className="text-semi-bold">Blog</NavLink>
                    </div>
                    <a href="/#" className="btn contact-btn text-semi-bold">Contact us</a>
                </div>
            </div>
        </header>
    );
};

export default Header;