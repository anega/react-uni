import React from 'react';
import {components} from 'react-select';

const OptionOrder = ({children, ...props}) => (
    <components.Option {...props}>{props.data.icon}{children}</components.Option>
);

export default OptionOrder;