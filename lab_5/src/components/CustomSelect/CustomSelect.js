import React from 'react';
import Select from 'react-select';
import {default as Option} from './OptionCode';
import {default as SingleValue} from './SingleValueCode';
import {default as DropdownIndicator} from './DropdownIndicatorCode';
import {commonSelectStyles} from './selectStyles';

const selectStyles = {
    ...commonSelectStyles,
    container: (provided, state) => ({
        ...provided,
        width: '80px',
        minWidth: '80px',
    }),
};

export const CustomSelect = ({options, filter, onChange, isSearchable = true, className}) => {
    return (
        <Select options={options}
                defaultValue={options[0]}
                className={className}
                onChange={({value}) => onChange(value)}
                components={{DropdownIndicator, Option, SingleValue}}
                isSearchable={isSearchable}
                filterOption={filter}
                styles={selectStyles}/>
    );
};
