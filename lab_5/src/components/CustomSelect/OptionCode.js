import React from 'react';
import {components} from 'react-select';
import './styles.css';

const OptionCode = ({children, ...props}) => (
    <components.Option {...props}
                       innerProps={Object.assign({}, props.innerProps, {'data-country': props.data.countryName})}>
        {props.data.icon && <span className="select-icon">{props.data.icon}</span>}
        <span className="select-option-text">{children}</span>
    </components.Option>
);

export default OptionCode;