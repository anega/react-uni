import React from 'react';
import {IconContext} from "react-icons";
import './Features.css';
import {FaUsers, FaCheckCircle, FaPencilRuler, FaQuestionCircle, FaClock, FaPenSquare} from "react-icons/fa";

const Features = () => (
    <div className="section features">
        <div className="section-inner">
            <p className="label-small features-label">Features</p>
            <h2 className="features-title">Design that solves problems, one product at a time</h2>
            <div className="features-list">
                <IconContext.Provider value={{color: "#2405F2", size: "35"}}>
                    <div className="features-list-item">
                        <FaUsers/>
                        <h6>Uses Client First</h6>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                            gravida mi.
                            Pellentesque et velit aliquam sed mi.</p>
                    </div>
                    <div className="features-list-item">
                        <FaCheckCircle/>
                        <h6>Two Free Revision Round</h6>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                            gravida mi.
                            Pellentesque et velit aliquam sed mi.</p>
                    </div>
                    <div className="features-list-item">
                        <FaPencilRuler/>
                        <h6>Template Customization</h6>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                            gravida mi.
                            Pellentesque et velit aliquam sed mi.</p>
                    </div>
                    <div className="features-list-item">
                        <FaQuestionCircle/>
                        <h6>24/7 Support</h6>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                            gravida mi.
                            Pellentesque et velit aliquam sed mi.</p>
                    </div>
                    <div className="features-list-item">
                        <FaClock/>
                        <h6>Quick Delivery</h6>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                            gravida mi.
                            Pellentesque et velit aliquam sed mi.</p>
                    </div>
                    <div className="features-list-item">
                        <FaPenSquare/>
                        <h6>Hands-on approach</h6>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                            gravida mi.
                            Pellentesque et velit aliquam sed mi.</p>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    </div>
);

export default Features;