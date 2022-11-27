import React from 'react';
import AsyncSelect from 'react-select/async';
import {default as DropdownIndicator} from './DropdownIndicatorCode';
import {commonSelectStyles} from './selectStyles';

const selectStyles = {
    ...commonSelectStyles,
    container: (provided, state) => ({
        ...provided,
        flex: 1,
        outline: 'none',
    }),
};

export const CustomAsyncSelect = ({componentKey, placeholder, onChange, loadOptions}) => {
    return (
        <AsyncSelect key={componentKey}
                     defaultOptions
                     cacheOptions
                     placeholder={placeholder}
                     onChange={onChange}
                     components={{DropdownIndicator}}
                     loadOptions={loadOptions}
                     styles={selectStyles}/>
    );
};
