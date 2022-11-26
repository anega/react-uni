import React from 'react';
import './FieldGroupInfo.css';

export const FieldGroupInfo = ({title, label}) => {
    return (
        <div className="field-group-info">
            <h3>{title}</h3>
            <p>{label}</p>
        </div>
    );
};
