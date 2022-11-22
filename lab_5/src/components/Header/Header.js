import React from 'react';
import './Header.css';
import logo from 'assets/images/logo.png';

export const Header = () => (
    <header className="header">
        <h1 className="header-logo"><img src={logo} alt="Company name"/></h1>
    </header>
);
