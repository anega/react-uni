import React from 'react';
import StrategyItem from "./StrategyItem";
import './StrategyList.css';

const StrategyList = ({items}) => (
    <div className="work-strategy-list">
        {items.map((item, index) => (
            <StrategyItem key={index} item={item}/>
        ))}
    </div>
);

export default StrategyList;