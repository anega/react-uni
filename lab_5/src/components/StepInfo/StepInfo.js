import React from 'react';
import './StepInfo.css';

export const StepInfo = ({title, description}) => (
    <div className="step-info">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
);
