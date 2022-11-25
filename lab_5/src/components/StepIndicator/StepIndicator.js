import React from 'react';
import './StepIndicator.css';

const steps = [1, 2, 3];

export const StepIndicator = ({formStep}) => (
    <div className="step-indicator">
        {steps.map((step, index) => (
            <div key={index} className={`step ${formStep >= step ? 'active' : ''}`}>&nbsp;</div>
        ))}
    </div>
);
