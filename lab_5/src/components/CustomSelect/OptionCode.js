import React from 'react';
import {components} from 'react-select';

const OptionCode = ({children, ...props}) => (
    <components.Option {...props}
                       innerProps={Object.assign({}, props.innerProps, {'data-country': props.data.countryName})}>{children}</components.Option>
);

export default OptionCode;