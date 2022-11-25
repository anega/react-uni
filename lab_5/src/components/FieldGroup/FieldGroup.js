import React from 'react';
import './FieldGroup.css';

export const FieldGroup = (props) => (
    <div className={`field-group ${props.className}`}>{props.children}</div>
);
