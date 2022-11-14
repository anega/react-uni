import React from 'react';
import Select from 'react-select';

const selectStyles = {
    container: (provided, state) => ({
        ...provided,
        minWidth: '240px',
    }),
    control: (provided, state) => ({
        ...provided,
        border: '1px solid #d0d5dd',
        borderRadius: '8px',
        padding: '4px',
        outline: 'none',
    }),
    indicatorSeparator: () => null,
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: '#667085',
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: '#101828',
    }),
};

const DropdownSelect = ({options, onChange, components, classes}) => {
    return (
        <div>
            <Select options={options}
                    defaultValue={options[0]}
                    onChange={({value}) => onChange(value)}
                    components={components}
                    isSearchable={false}
                    styles={selectStyles}
                    className={classes}/>
        </div>
    );
};

export default DropdownSelect;