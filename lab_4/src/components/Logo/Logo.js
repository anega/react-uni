import React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import logo from '../../assets/logo.png';

const Logo = ({title, linkTo, themeDark, wrapClasses}) => (
    <Link to={linkTo} className={`flex items-center ${wrapClasses}`}>
        <img className="w-[32px] h-[32px]" src={logo} alt="logo"/>
        <span className={clsx(!themeDark && 'text-blue-800', themeDark && 'text-white', 'mt-1', 'ml-2', 'font-semibold', 'text-[17px]')}>{title}</span>
    </Link>
);

export default Logo;