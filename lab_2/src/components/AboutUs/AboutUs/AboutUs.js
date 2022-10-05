import React from 'react';
import './AboutUs.css';
import {AboutUsImg} from '../../../assets/images';

const AboutUs = () => (
    <div className="section about-us">
        <div className="section-inner">
            <div className="about-us-text">
                <p className="label">About us</p>
                <h1>Our designs solve problems</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div>
                <img src={AboutUsImg} alt="Finsweet about us"/>
            </div>
        </div>
    </div>
);

export default AboutUs;