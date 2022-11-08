import React from 'react';
import {NavLink, useOutletContext, useParams} from 'react-router-dom';
import PageHero from '../../components/PageHero/PageHero';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import categoriesData from '../../data/post-categories.json';

const Categories = () => {
    const outletContext = useOutletContext();
    const urlParams = useParams();
    const currentCategoryName = categoriesData.find(category => {
        if (category.id === urlParams.categoryName) return category.name;
    });
    const postsFilteredByCategory = outletContext.posts.filter(post => {
        if (!urlParams.categoryName) return post;
        return post.category.includes(currentCategoryName.name) && post;
    });

    return (
        <>
            <PageHero
                label="Our blog"
                title="Resources and insights"
                description="The latest industry news, interviews, technologies, and resources."
            />
            <div>
                <aside>
                    <Search searchQuery={outletContext.searchQuery} handleSearch={outletContext.handleSearchChange}/>
                    <div>
                        <h4>Blog categories</h4>
                        <NavLink to="/categories" className="p-2">View all</NavLink>
                        {categoriesData.map(category => (
                            <NavLink key={category.id} to={`/categories/${category.id}`}
                                     className="p-2">{category.name}</NavLink>
                        ))}
                    </div>
                </aside>
                <PostsList posts={postsFilteredByCategory}/>
            </div>
        </>
    );
};

export default Categories;