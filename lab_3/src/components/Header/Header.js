import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => (
    <header className="home-header">
        <h1>
            <Link to="/">FLAT UI COLORS 2</Link>
        </h1>
    </header>
);

export default Header;