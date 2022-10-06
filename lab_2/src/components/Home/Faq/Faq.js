import React from 'react';
import './Faq.css';
import Accordion from "../../Accordion/Accordion";

const Faq = () => {
    return (
        <div className="section faq">
            <div className="section-inner">
                <div className="section-info">
                    <h3>Frequently asked questions</h3>
                    <p className="label"><a href="/#">Contact us for more info</a></p>
                </div>
                <Accordion/>
            </div>
        </div>
    );
};

export default Faq;