import React from 'react';
import './Header.css';
import Logo from "../Logo/Logo";
import MainMenu from "../MainMenu/MainMenu";
import RoundedButtonLink from "../RoundedButtonLink/RoundedButtonLink";

const Header = () => {
    return (
        <header className="section header">
            <div className="section-inner">
                <Logo/>
                <div className="menu-wrap">
                    <MainMenu/>
                    <RoundedButtonLink text="Contact us" link="/#" className="btn btn-outline"/>
                </div>
            </div>
        </header>
    );
};

export default Header;