import clsx from 'clsx';
import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import Select from 'react-select';
import categoriesData from '../../data/post-categories.json';

const options = categoriesData.map((category) => {
    return {
        value: category.id,
        label: category.name
    };
});

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

const CategoriesMenu = () => {
    const navigate = useNavigate();
    const activeLinkClass = ({isActive}) => {
        return clsx(isActive && 'text-[#344054] bg-[#F9FAFB]', 'block', 'rounded-md', 'py-2.5', 'pl-3.5', 'font-semibold', 'text-base', 'text-[#667085]', 'hover:text-[#344054]', 'hover:bg-[#F9FAFB]');
    }

    return (
        <>
            <div className="hidden lg:block lg:mt-8 lg:w-full">
                <h4 className="mb-5 font-semibold text-sm text-[#6941C6]">Blog categories</h4>
                {categoriesData.map(category => (
                    <NavLink end
                             key={category.id}
                             to={category.id === 'all' ? '/categories' : `/categories/${category.id}`}
                             className={(isActive) => activeLinkClass(isActive)}>{category.name}</NavLink>
                ))}
            </div>
            {/*TODO: set selected value if page refreshed on the category page*/}
            <Select options={options}
                    defaultValue={options[0]}
                    onChange={({value}) => navigate(`/categories${value === 'all' ? '' : '/' + value}`)}
                    isSearchable={false}
                    styles={selectStyles}
                    className="mb-12 md:mb-0 lg:hidden"/>
        </>
    );
};

export default CategoriesMenu;