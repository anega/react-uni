import React from 'react';
import {LogoImg} from "../../assets/images";
import {Link} from "react-router-dom";

const Logo = () => (
    <Link to="/">
        <img src={LogoImg} alt="Fensweet logo"/>
    </Link>
);

export default Logo;