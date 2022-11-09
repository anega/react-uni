import React from 'react';
import {useOutletContext, useParams} from 'react-router-dom';
import CategoriesMenu from '../../components/CategoriesList/CategoriesMenu';
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
            <div className="w-full md:max-w-[1216px] md:mx-auto px-4 lg:flex">
                <aside className="md:flex md:justify-between md:items-start lg:flex-col lg:justify-start md:mb-8 lg:w-[280px] lg:mr-16">
                    <Search searchQuery={outletContext.searchQuery} handleSearch={outletContext.handleSearchChange}
                            className="hidden md:block"/>
                    <CategoriesMenu/>
                </aside>
                <PostsList posts={postsFilteredByCategory}/>
            </div>
        </>
    );
};

export default Categories;