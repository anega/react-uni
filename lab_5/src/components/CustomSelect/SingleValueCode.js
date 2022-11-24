import React from 'react';
import {components} from 'react-select';

const SingleValueCode = ({children, ...props}) => (
    <components.SingleValue {...props}
                            innerProps={Object.assign({}, props.innerProps, {'data-country': props.data.countryName})}>{children}</components.SingleValue>
);

export default SingleValueCode;