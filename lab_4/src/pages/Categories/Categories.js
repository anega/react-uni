import React, {useMemo, useRef, useState} from 'react';
import {useOutletContext, useParams} from 'react-router-dom';
import CategoriesMenu from '../../components/CategoriesList/CategoriesMenu';
import PageHero from '../../components/PageHero/PageHero';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import categoriesData from '../../data/post-categories.json';
import Pagination from '../../components/Pagination';

const pageSize = 8;

const Categories = () => {
    const outletContext = useOutletContext();
    const urlParams = useParams();
    const contentRef = useRef();
    const [currentPage, setCurrentPage] = useState(1);

    const currentCategoryName = categoriesData.find(category => {
        if (category.id === urlParams.categoryName) return category.name;
    });

    const postsFilteredByCategory = outletContext.posts.filter(post => {
        if (!urlParams.categoryName) return post;
        return post.category.some((category) => category.name === currentCategoryName.name) && post;
    });

    const currentPostsData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return postsFilteredByCategory.slice(firstPageIndex, lastPageIndex);
    }, [postsFilteredByCategory, currentPage]);

    return (
        <>
            <PageHero
                label="Our blog"
                title="Resources and insights"
                description="The latest industry news, interviews, technologies, and resources."
            />
            <div ref={contentRef} className="w-full md:max-w-[1216px] md:mx-auto px-4 lg:flex">
                <aside className="md:flex md:justify-between md:items-start lg:flex-col lg:justify-start md:mb-8 lg:w-[280px] lg:mr-16">
                    <Search searchQuery={outletContext.searchQuery} handleSearch={outletContext.handleSearchChange}
                            className="hidden md:block"/>
                    <CategoriesMenu/>
                </aside>
                <PostsList posts={currentPostsData}/>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={postsFilteredByCategory.length}
                    pageSize={pageSize}
                    onPageChange={page => {
                        window.scrollTo({
                            top: contentRef.current.getBoundingClientRect().top + window.scrollY,
                            left: 0,
                        });
                        setCurrentPage(page);
                    }}
                />
            </div>
        </>
    );
};

export default Categories;