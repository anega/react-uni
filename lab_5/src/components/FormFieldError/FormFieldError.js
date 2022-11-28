import React from 'react';
import './FormFieldError.css';

export const FormFieldError = ({errorMessage}) => (
    <p className="field-error">{errorMessage}</p>
);
