import React from 'react';
import {components} from 'react-select';

const SingleValueOrder = ({children, ...props}) => (
    <components.SingleValue {...props}>{props.data.icon}{children}</components.SingleValue>
);

export default SingleValueOrder;