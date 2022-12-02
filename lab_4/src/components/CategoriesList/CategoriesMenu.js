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
        return clsx(isActive && 'text-blue-650 bg-gray-80', !isActive && 'textgray-450', 'block', 'rounded-md', 'py-2.5', 'pl-3.5', 'font-semibold', 'text-base', 'hover:text-blue-650', 'hover:bg-gray-80');
    }

    const handleCategorySelectChange = (value) => navigate(`/categories${value === 'all' ? '' : '/' + value}`)

    return (
        <>
            <div className="hidden lg:block lg:mt-8 lg:w-full">
                <h4 className="mb-5 font-semibold text-sm text-purple-600">Blog categories</h4>
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