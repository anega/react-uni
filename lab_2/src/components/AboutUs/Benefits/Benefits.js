import React from 'react';
import {IconContext} from "react-icons";
import './Benefits.css';
import {Company01, Company02, Company03, Company04, Company05} from "../../../assets/images";
import {FaPencilRuler, FaPenSquare, FaUsers} from "react-icons/fa";

const Benefits = () => (
    <div className="section benefits">
        <div className="section-inner">
            <h2>The benefits of working<br/>with us</h2>
            <div className="benefits-list">
                <IconContext.Provider value={{color: "#2405F2", size: "35"}}>
                    <div className="benefits-item">
                        <FaPenSquare/>
                        <h6>Customize with ease</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua ut enim.</p>
                    </div>
                    <div className="benefits-item">
                        <FaPencilRuler/>
                        <h6>Perfectly Responsive</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua ut enim.</p>
                    </div>
                    <div className="benefits-item">
                        <FaUsers/>
                        <h6>Friendly Support</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua ut enim.</p>
                    </div>
                </IconContext.Provider>
            </div>
            <div className="partners-list">
                <div className="finsweet-users">
                    <h3>100.000+</h3>
                    <p>Finsweet Users</p>
                </div>
                <img src={Company01} alt="Finsweet partner logo"/>
                <img src={Company02} alt="Finsweet partner logo"/>
                <img src={Company03} alt="Finsweet partner logo"/>
                <img src={Company04} alt="Finsweet partner logo"/>
                <img src={Company05} alt="Finsweet partner logo"/>
            </div>
        </div>
    </div>
);

export default Benefits;