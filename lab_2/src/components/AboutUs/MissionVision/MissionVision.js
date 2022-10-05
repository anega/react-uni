import React from 'react';
import './MissionVission.css';
import {Mission, Vision} from "../../../assets/images";

const MissionVision = () => (
    <div className="section mission-vision">
        <div className="section-inner">
            <div className="mission">
                <div className="mission-info">
                    <p className="label-small">Our Mission</p>
                    <h3>Inspire, Innovate, Share</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="mission-img">
                    <img src={Mission} alt="Finsweer mission"/>
                </div>
            </div>
            <div className="vision">
                <div className="vision-img">
                    <img src={Vision} alt="Finsweer vision"/>
                </div>
                <div className="vision-info">
                    <p className="label-small">Our Vision</p>
                    <h3>Laser focus</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </div>
);

export default MissionVision;