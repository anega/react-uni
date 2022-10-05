import React from 'react';
import {NavLink} from "react-router-dom";
import "./MainMenu.css";

const MainMenu = () => (
    <div className="main-menu">
        <NavLink to="/" end className="text-semi-bold">Home</NavLink>
        <NavLink to="about-us" className="text-semi-bold">About us</NavLink>
        <NavLink to="another-link" className="text-semi-bold">Features</NavLink>
        <NavLink to="another-link" className="text-semi-bold">Pricing</NavLink>
        <NavLink to="another-link" className="text-semi-bold">FAQ</NavLink>
        <NavLink to="another-link" className="text-semi-bold">Blog</NavLink>
    </div>
);

export default MainMenu;