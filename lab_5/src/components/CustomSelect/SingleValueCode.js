import React from 'react';
import {components} from 'react-select';
import './styles.css';

const SingleValueCode = ({children, ...props}) => (
    <components.SingleValue {...props}
                            innerProps={Object.assign({}, props.innerProps, {'data-country': props.data.countryName})}>
        {props.data.icon && <span className="select-icon">{props.data.icon}</span>}
        <span className="select-option-text">{children}</span>
    </components.SingleValue>
);

export default SingleValueCode;