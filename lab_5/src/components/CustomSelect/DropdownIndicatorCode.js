import React from 'react';
import {components} from 'react-select';
import {AiFillCaretDown} from 'react-icons/ai';

const DropdownIndicatorCode = ({children, ...props}) => (
    <components.DropdownIndicator {...props}><AiFillCaretDown size={10}/>{children}</components.DropdownIndicator>
);

export default DropdownIndicatorCode;