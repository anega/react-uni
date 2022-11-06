import React from 'react';
import {NavLink, useOutletContext} from "react-router-dom";
import categoriesData from '../../data/post-categories.json';
import PageHero from "../../components/PageHero/PageHero";
import PostsList from "../../components/PostsList/PostsList";

const Categories = () => {
    const posts = useOutletContext();

    return (
        <>
            <PageHero
                label="Our blog"
                title="Resources and insights"
                description="The latest industry news, interviews, technologies, and resources."
            />
            <div>
                <aside>
                    <div>
                        <h4>Blog categories</h4>
                        <NavLink to="/categories">View all</NavLink>
                        {categoriesData.map(category => (
                            <NavLink key={category.id} to={`/categories/${category.id}`}>{category.name}</NavLink>
                        ))}
                    </div>
                </aside>
                <PostsList posts={posts}/>
            </div>
        </>
    );
};

export default Categories;