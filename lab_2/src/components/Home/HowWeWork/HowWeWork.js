import React from 'react';
import {data} from '../../../data/howWeWorkData.js';
import StrategyList from "./StrategyList";
import './HowWeWork.css';

const HowWeWork = () => (
    <div className="section how-we-work">
        <div className="section-inner">
            <div className="how-we-work-info">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <a href={`${data.link.href}`} className="label arrow-link">{`${data.link.text}`}</a>
            </div>
            <StrategyList items={data.tiles}/>
        </div>
    </div>
);

export default HowWeWork;