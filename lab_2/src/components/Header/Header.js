import React from 'react';
import './Header.css';
import Logo from "../Logo/Logo";
import MainMenu from "../MainMenu/MainMenu";

const Header = () => {
    return (
        <header className="section header">
            <div className="section-inner">
                <Logo/>
                <div className="menu-wrap">
                    <MainMenu/>
                    <a href="/#" className="btn contact-btn text-semi-bold">Contact us</a>
                </div>
            </div>
        </header>
    );
};

export default Header;