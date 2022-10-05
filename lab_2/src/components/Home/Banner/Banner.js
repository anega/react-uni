import React from 'react';
import './Banner.css';
import HeroImage from '../../../assets/images/hero-home.png';
import RoundedButtonLink from "../../RoundedButtonLink/RoundedButtonLink";

const Banner = () => (
    <div className="section banner">
        <div className="section-inner">
            <div>
                <h1>Building stellar websites for early startups</h1>
                <p className="text-semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor
                    incididunt.</p>
                <div className="view-links">
                    <RoundedButtonLink link="/#" className="btn btn-light" text="View our work"/>
                    <a href="/#" className="arrow-link">View Pricing ⟶</a>
                </div>
            </div>
            <div className="banner-image-wrap">
                <img src={HeroImage} alt="Finsweet Building stellar websites for early startups"/>
            </div>
        </div>
    </div>
);

export default Banner;