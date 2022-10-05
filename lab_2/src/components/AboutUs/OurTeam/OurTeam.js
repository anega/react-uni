import React from 'react';
import {IconContext} from "react-icons";
import './OurTeam.css';
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";
import {Team01, Team02, Team03, Team04} from "../../../assets/images";


const OurTeam = () => (
    <div className="section our-team">
        <div className="section-inner">
            <h2>Meet our team</h2>
            <div className="team-list">
                <IconContext.Provider value={{color: "#fff", size: "15"}}>
                    <div className="team-item">
                        <div className="team-img">
                            <img src={Team01} alt="Finsweet employee"/>
                            <div className="employee-social-links">
                                <a href="/#"><FaFacebook/></a>
                                <a href="/#"><FaTwitter/></a>
                                <a href="/#"><FaLinkedin/></a>
                            </div>
                        </div>
                        <h6>John Smith</h6>
                        <p>CEO</p>
                    </div>
                    <div className="team-item">
                        <div className="team-img">
                            <img src={Team02} alt="Finsweet employee"/>
                            <div className="employee-social-links">
                                <a href="/#"><FaFacebook/></a>
                                <a href="/#"><FaTwitter/></a>
                                <a href="/#"><FaLinkedin/></a>
                            </div>
                        </div>
                        <h6>Simon Adams</h6>
                        <p>CTO</p>
                    </div>
                    <div className="team-item">
                        <div className="team-img">
                            <img src={Team03} alt="Finsweet employee"/>
                            <div className="employee-social-links">
                                <a href="/#"><FaFacebook/></a>
                                <a href="/#"><FaTwitter/></a>
                                <a href="/#"><FaLinkedin/></a>
                            </div>
                        </div>
                        <h6>Paul Jones</h6>
                        <p>Design Lead</p>
                    </div>
                    <div className="team-item">
                        <div className="team-img">
                            <img src={Team04} alt="Finsweet employee"/>
                            <div className="employee-social-links">
                                <a href="/#"><FaFacebook/></a>
                                <a href="/#"><FaTwitter/></a>
                                <a href="/#"><FaLinkedin/></a>
                            </div>
                        </div>
                        <h6>Sara Hardin</h6>
                        <p>Project Manager</p>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    </div>
);

export default OurTeam;