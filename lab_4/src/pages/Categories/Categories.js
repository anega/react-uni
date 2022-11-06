import React from 'react';
import {NavLink, useOutletContext} from "react-router-dom";
import categoriesData from '../../data/post-categories.json';
import PageHero from "../../components/PageHero/PageHero";
import PostsList from "../../components/PostsList/PostsList";
import Search from "../../components/Search/Search";

const Categories = () => {
    const outletContext = useOutletContext();

    return (
        <>
            <PageHero
                label="Our blog"
                title="Resources and insights"
                description="The latest industry news, interviews, technologies, and resources."
            />
            <div>
                <aside>
                    <Search handleSearch={outletContext.handleSearchChange}/>
                    <div>
                        <h4>Blog categories</h4>
                        <NavLink to="/categories">View all</NavLink>
                        {categoriesData.map(category => (
                            <NavLink key={category.id} to={`/categories/${category.id}`}>{category.name}</NavLink>
                        ))}
                    </div>
                </aside>
                <PostsList posts={outletContext.posts}/>
            </div>
        </>
    );
};

export default Categories;