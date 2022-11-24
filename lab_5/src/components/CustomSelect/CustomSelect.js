import React from 'react';
import Select from 'react-select';
import {default as Option} from './OptionCode';
import {default as SingleValue} from './SingleValueCode';
import {default as DropdownIndicator} from './DropdownIndicatorCode';

const selectStyles = {
    container: (provided, state) => ({
        ...provided,
        width: '80px',
        outline: 'none',
    }),
    control: (provided, state) => ({
        ...provided,
        border: 'none',
        borderBottom: '1px solid #E2E4E5',
        borderRadius: 0,
        boxShadow: 'none',
        padding: '9px 7px 9px 16px',
        outline: 'none',
        '&:hover': {
            border: 'none',
            borderBottom: '1px solid #007AFF',
        }
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: 0,
    }),
    indicatorSeparator: () => null,
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: '#242426',
        margin: 0,
        padding: 0,
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: '#101828',
        margin: 0,
    }),
};

export const CustomSelect = ({options, filter}) => {
    return (
        <Select options={options}
                defaultValue={options[0]}
                // onChange={({value}) => {
                // }}
                components={{DropdownIndicator, Option, SingleValue}}
                isSearchable={true}
                filterOption={filter}
                styles={selectStyles}/>
    );
};
