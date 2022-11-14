import React from 'react';
import {AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineSortAscending, AiOutlineSortDescending} from 'react-icons/ai';
import DropdownSelect from '../DropdownSelect/DropdownSelect';
import {default as SingleValue} from '../DropdownSelect/SingleValueOrder';
import {default as Option} from '../DropdownSelect/OptionOrder';

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

const OrderPosts = ({orderBy}) => {
    return (
        <DropdownSelect options={options} onChange={orderBy} components={{SingleValue, Option}}/>
    );
};

export default OrderPosts;