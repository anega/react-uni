import React from 'react';
import './Button.css';

export const Button = ({className, value, onClick, prefixIcon, icon, buttonType}) => {
    return (
        <button type={buttonType} className={className} onClick={onClick}>
            {prefixIcon && <span className="btn-prefix-icon">{prefixIcon}</span>}
            {value}
            {icon && <span className="btn-suffix-icon">{icon}</span>}
        </button>
    );
};
