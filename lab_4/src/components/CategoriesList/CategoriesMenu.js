import React from 'react';
import clsx from 'clsx';
import {NavLink, useNavigate} from 'react-router-dom';
import DropdownSelect from '../DropdownSelect/DropdownSelect';
import categoriesData from '../../data/post-categories.json';

const options = categoriesData.map((category) => {
    return {
        value: category.id,
        label: category.name
    };
});

const CategoriesMenu = () => {
    const navigate = useNavigate();
    const activeLinkClass = ({isActive}) => {
        return clsx(isActive && 'text-[#344054] bg-[#F9FAFB]', 'block', 'rounded-md', 'py-2.5', 'pl-3.5', 'font-semibold', 'text-base', 'text-[#667085]', 'hover:text-[#344054]', 'hover:bg-[#F9FAFB]');
    }

    const handleCategorySelectChange = (value) => navigate(`/categories${value === 'all' ? '' : '/' + value}`)

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
            <DropdownSelect options={options}
                            onChange={handleCategorySelectChange}
                            classes="mb-12 md:mb-0 lg:hidden"/>
        </>
    );
};

export default CategoriesMenu;