import React from 'react';
import logo from "../../assets/images/logo.svg";
import {Link} from "react-router-dom";

const Logo = () => (
    <Link to="/">
        <img src={logo} alt="Fensweet logo"/>
    </Link>
);

export default Logo;