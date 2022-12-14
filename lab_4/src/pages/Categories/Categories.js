import React, {useMemo, useRef} from 'react';
import {useOutletContext, useParams} from 'react-router-dom';
import clsx from 'clsx';
import CategoriesMenu from '../../components/CategoriesList/CategoriesMenu';
import PageHero from '../../components/PageHero/PageHero';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import Pagination from '../../components/Pagination';
import categoriesData from '../../data/post-categories.json';

export const Categories = () => {
    const {
        posts,
        currentPage,
        handleCurrentPage,
        postsPerPage,
        searchQuery,
        handleSearchChange
    } = useOutletContext();
    const urlParams = useParams();
    const contentRef = useRef();

    const currentCategoryName = categoriesData.find(category => {
        if (category.id === urlParams.categoryName) return category.name;
    });

    const postsFilteredByCategory = posts.filter(post => {
        if (!urlParams.categoryName) return post;
        return post.category.some((category) => category.name === currentCategoryName.name) && post;
    });

    const currentPostsData = useMemo(() => {
        let firstPageIndex, lastPageIndex;
        if (currentPage === 1) {
            firstPageIndex = (currentPage - 1) * (postsPerPage + 1);
            lastPageIndex = firstPageIndex + postsPerPage + 1;
        } else {
            firstPageIndex = (currentPage - 1) * postsPerPage + 1;
            lastPageIndex = firstPageIndex + postsPerPage;
        }

        return postsFilteredByCategory.slice(firstPageIndex, lastPageIndex);
    }, [postsFilteredByCategory, currentPage]);

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
                        <Search searchQuery={searchQuery} handleSearch={handleSearchChange}
                                className="hidden md:block"/>
                        <CategoriesMenu/>
                    </aside>
                    <PostsList posts={currentPostsData}
                               currentPage={currentPage}
                               className="sm:grid-cols-2"
                               leadingPostWrapperClass={clsx(currentPage === 1 && ['sm:first:flex', 'sm:first:flex-row', 'sm:first:col-span-full'])}/>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalCount={postsFilteredByCategory.length - 1}
                    pageSize={postsPerPage}
                    scrollToElement={contentRef}
                    onPageChange={page => handleCurrentPage(page)}
                />
            </div>
        </>
    );
};
