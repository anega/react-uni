import React from 'react';
import './HowWeWork.css';
import {IconNum01, IconNum02, IconNum03, IconNum04} from '../../../assets/images';

const HowWeWork = () => (
    <div className="section how-we-work">
        <div className="section-inner">
            <div className="how-we-work-info">
                <h2>How we work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <a href="/#" className="label arrow-link">Get in touch with us ⟶</a>
            </div>
            <div className="work-strategy-list">
                <div className="work-strategy-item">
                    <img src={IconNum01} alt=""/>
                        <h5>Strategy</h5>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                </div>
                <div className="work-strategy-item">
                    <img src={IconNum02} alt=""/>
                        <h5>Wireframing</h5>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                </div>
                <div className="work-strategy-item">
                    <img src={IconNum03} alt=""/>
                        <h5>Design</h5>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                </div>
                <div className="work-strategy-item">
                    <img src={IconNum04} alt=""/>
                        <h5>Development</h5>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                </div>
            </div>
        </div>
    </div>
);

export default HowWeWork;