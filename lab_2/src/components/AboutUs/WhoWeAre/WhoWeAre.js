import React from 'react';
import './WhoWeAre.css';
import {WhoWeAre as WhoWeAreImg} from '../../../assets/images';

const WhoWeAre = () => (
    <div className="section who-we-are">
        <div className="section-inner">
            <p className="label">Who we are</p>
            <div className="who-we-are-info">
                <div>
                    <h3>Goal focussed</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <h3>Continuous improvement</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <img src={WhoWeAreImg} alt="Finsweet who we are"/>
        </div>
    </div>
);

export default WhoWeAre;