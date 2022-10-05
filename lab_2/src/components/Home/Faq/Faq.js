import React from 'react';
import './Faq.css';

const Faq = () => {
    return (
        <div className="section faq">
            <div className="section-inner">
                <div className="section-info">
                    <h3>Frequently asked questions</h3>
                    <p className="label"><a href="/#">Contact us for more info</a></p>
                </div>
                <div className="accordion">
                    <div className="accordion-item">
                        <div className="accordion-heading">
                            <span className="h6 faq-item-number">01</span>
                            <h6>How much time does it take?</h6>
                            <span className="accordion-action"></span>
                        </div>
                        <div className="accordion-body">
                            <p className="label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-heading">
                            <span className="h6 faq-item-number">02</span>
                            <h6>What is your class naming convention?</h6>
                            <span className="accordion-action"></span>
                        </div>
                        <div className="accordion-body">
                            <p className="label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-heading">
                            <span className="h6 faq-item-number">03</span>
                            <h6>How do you communicate?</h6>
                            <span className="accordion-action"></span>
                        </div>
                        <div className="accordion-body">
                            <p className="label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-heading">
                            <span className="h6 faq-item-number">04</span>
                            <h6>I have a bigger project. Can you handle it?</h6>
                            <span className="accordion-action"></span>
                        </div>
                        <div className="accordion-body">
                            <p className="label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-heading">
                            <span className="h6 faq-item-number">05</span>
                            <h6>What is your class naming convention?</h6>
                            <span className="accordion-action"></span>
                        </div>
                        <div className="accordion-body">
                            <p className="label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;