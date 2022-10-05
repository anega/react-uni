import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';
import './Footer.css';
import Logo from "../Logo/Logo";
import MainMenu from "../MainMenu/MainMenu";

const Footer = () => {
    return (
        <div className="footer">
            <div className="section upper-footer">
                <div className="section-inner">
                    <div className="contact-wrap">
                        <Logo/>
                        <p className="label-small contact-tag-line">We are always open to discuss your project and
                            improve your
                            online presence.</p>
                        <ul className="contact-info">
                            <li>
                                <p className="label">Email me at</p>
                                <p><a href="mailto:contact@website.com">contact@website.com</a></p>
                            </li>
                            <li>
                                <p className="label">Call us</p>
                                <p><a href="tel:0927627728525">0927 6277 28525</a></p>
                            </li>
                        </ul>
                    </div>
                    <div className="social-links-section">
                        <h2>Lets Talk!</h2>
                        <p>We are always open to discuss your project, improve your online presence and help with your
                            UX/UI
                            design challenges.</p>
                        <ul className="social-links">
                            <li>
                                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section lower-footer">
                <div className="section-inner">
                    <p className="copyright text-semi-bold">Copyright 2021, Finsweet.com</p>
                    <MainMenu/>
                </div>
            </div>
        </div>
    );
};

export default Footer;