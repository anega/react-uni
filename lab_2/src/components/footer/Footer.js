import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="section upper-footer">
                <div className="section-inner">
                    <div className="contact-wrap">
                        <img src={logo} alt="Finsweet logo" />
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
                                    icon{/*<img src="assets/images/facebook.svg" alt="Finsweet facebook account" />*/}
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                    icon{/*<img src="assets/images/twitter.svg" alt="Finsweet twitter account" />*/}
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    icon{/*<img src="assets/images/instagram.svg" alt="Fensweet instagram account" />*/}
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    icon{/*<img src="assets/images/linkedin.svg" alt="Fensweet linkedin account" />*/}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section lower-footer">
                <div className="section-inner">
                    <p className="copyright text-semi-bold">Copyright 2021, Finsweet.com</p>
                    <div className="main-menu">
                        <a href="/#" className="text-semi-bold active">Home</a>
                        <a href="/#" className="text-semi-bold">About us</a>
                        <a href="/#" className="text-semi-bold">Features</a>
                        <a href="/#" className="text-semi-bold">Pricing</a>
                        <a href="/#" className="text-semi-bold">FAQ</a>
                        <a href="/#" className="text-semi-bold">Blog</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;