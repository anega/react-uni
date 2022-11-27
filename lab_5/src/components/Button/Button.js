import React from 'react';
import './Button.css';

export const Button = ({className, value, onClick, icon, buttonType}) => {
    return (
        <button type={buttonType} className={className} onClick={onClick}>
            {value}
            {icon && <span className="btn-icon">{icon}</span>}
        </button>
    );
};
