import React from 'react';
import './Inquiry.css';

const Inquiry = () => (
    <div className="section send-inquiry">
        <div className="section-inner">
            <div className="inquiry-description">
                <h1>Building stellar websites for early startups</h1>
                <p className="test-semi-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor
                    incididunt ut labore et dolore magna aliqua ut enim.</p>
            </div>
            <div className="inquiry-form-wrap">
                <h5>Send inquiry</h5>
                <p className="label-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor
                    incididunt ut labore.</p>
                <form action="" className="inquiry-form">
                    <input type="text" placeholder="Your name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Paste your Figma design URL"/>
                    <button className="btn btn-light">Send an Inquiry</button>
                </form>
                <p><a href="/#" className="label arrow-link">Get in touch with us ⟶</a></p>
            </div>
        </div>
    </div>
);

export default Inquiry;