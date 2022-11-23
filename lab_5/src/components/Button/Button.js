import React from 'react';
import './Button.css';

export const Button = ({className, value, onClick, icon}) => {
    return (
        <button className={className} onClick={onClick}>{value}{icon}</button>
    );
};
