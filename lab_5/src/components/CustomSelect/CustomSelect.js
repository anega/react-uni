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
        outline: 'none',
    }),
};

export const CustomSelect = ({options, filter, onChange}) => {
    return (
        <Select options={options}
                defaultValue={options[0]}
                onChange={({value}) => onChange(value)}
                components={{DropdownIndicator, Option, SingleValue}}
                isSearchable={true}
                filterOption={filter}
                styles={selectStyles}/>
    );
};
