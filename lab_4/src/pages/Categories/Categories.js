import React, {useMemo, useRef} from 'react';
import {useOutletContext, useParams} from 'react-router-dom';
import CategoriesMenu from '../../components/CategoriesList/CategoriesMenu';
import PageHero from '../../components/PageHero/PageHero';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import categoriesData from '../../data/post-categories.json';
import Pagination from '../../components/Pagination';

const Categories = () => {
    const outletContext = useOutletContext();
    const urlParams = useParams();
    const contentRef = useRef();

    const currentCategoryName = categoriesData.find(category => {
        if (category.id === urlParams.categoryName) return category.name;
    });

    const postsFilteredByCategory = outletContext.posts.filter(post => {
        if (!urlParams.categoryName) return post;
        return post.category.some((category) => category.name === currentCategoryName.name) && post;
    });

    const currentPostsData = useMemo(() => {
        const firstPageIndex = (outletContext.currentPage - 1) * outletContext.postsPerPage;
        const lastPageIndex = firstPageIndex + outletContext.postsPerPage;
        return postsFilteredByCategory.slice(firstPageIndex, lastPageIndex);
    }, [postsFilteredByCategory, outletContext.currentPage]);

    return (
        <>
            <PageHero
                label="Our blog"
                title="Resources and insights"
                description="The latest industry news, interviews, technologies, and resources."
            />
            <div className="w-full md:max-w-[1216px] md:mx-auto px-4">
                <div ref={contentRef} className="lg:flex">
                    <aside
                        className="md:flex md:justify-between md:items-start lg:flex-col lg:justify-start md:mb-8 lg:w-[280px] lg:mr-16">
                        <Search searchQuery={outletContext.searchQuery} handleSearch={outletContext.handleSearchChange}
                                className="hidden md:block"/>
                        <CategoriesMenu/>
                    </aside>
                    <PostsList posts={currentPostsData}/>
                </div>
                <Pagination
                    currentPage={outletContext.currentPage}
                    totalCount={postsFilteredByCategory.length}
                    pageSize={outletContext.postsPerPage}
                    scrollToElement={contentRef}
                    onPageChange={page => outletContext.handleCurrentPage(page)}
                />
            </div>
        </>
    );
};

export default Categories;