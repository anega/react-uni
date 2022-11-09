import React from 'react';
import {AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineSortAscending, AiOutlineSortDescending} from 'react-icons/ai';
import Select, {components} from 'react-select';

const options = [
    {
        value: 'asc',
        label: 'Ascending',
        icon: <AiOutlineArrowDown className="inline-block mr-2 mb-0.5" color="#667085" size="18"/>
    },
    {
        value: 'desc',
        label: 'Descending',
        icon: <AiOutlineArrowUp className="inline-block mr-2 mb-0.5" color="#667085" size="18"/>
    },
    {
        value: 'az',
        label: 'Ascending by title',
        icon: <AiOutlineSortAscending className="inline-block mr-2 mb-0.5" color="#667085" size="18"/>
    },
    {
        value: 'za',
        label: 'Descending by title',
        icon: <AiOutlineSortDescending className="inline-block mr-2 mb-0.5" color="#667085" size="18"/>
    },
];

const SingleValue = ({children, ...props}) => (
    <components.SingleValue {...props}>{props.data.icon}{children}</components.SingleValue>
);

const Option = ({children, ...props}) => (
    <components.Option {...props}>{props.data.icon}{children}</components.Option>
);

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

const OrderPosts = ({orderBy}) => {
    return (
        <Select options={options}
                defaultValue={options[0]}
                onChange={(option) => orderBy(option.value)}
                components={{SingleValue, Option}}
                isSearchable={false}
                styles={selectStyles}/>
    );
};

export default OrderPosts;