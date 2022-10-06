import React from 'react';
import './StrategyItem.css';

const StrategyItem = ({item}) => (
    <div className="work-strategy-item">
        <img src={item.img} alt={item.title}/>
        <h5>{item.title}</h5>
        <p>{item.body}</p>
    </div>
);

export default StrategyItem;