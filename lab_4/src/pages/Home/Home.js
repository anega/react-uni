import React, {useMemo, useRef, useState} from 'react';
import {useOutletContext} from 'react-router-dom';
import OrderPosts from '../../components/OrderPosts/OrderPosts';
import PageHero from '../../components/PageHero/PageHero';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import Pagination from '../../components/Pagination';

const Home = () => {
    const outletContext = useOutletContext();
    const [postsOrder, setPostsOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const contentRef = useRef();

    const handlePostsOrder = (order) => {
        setPostsOrder(() => order);
    };

    const orderedPosts = useMemo(() => {
        switch (postsOrder) {
            case 'desc':
                return [...outletContext.posts]
                    .sort((postA, postB) => postA.date > postB.date ? 1 : -1);
            case 'az':
                return [...outletContext.posts]
                    .sort((postA, postB) => postA.title > postB.title ? 1 : -1);
            case 'za':
                return [...outletContext.posts]
                    .sort((postA, postB) => postA.title > postB.title ? -1 : 1);
            case 'asc':
            default:
                return outletContext.posts;
        }
    }, [postsOrder, outletContext.posts]);

    const currentPostsData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * outletContext.postsPerPage;
        const lastPageIndex = firstPageIndex + outletContext.postsPerPage;
        return orderedPosts.slice(firstPageIndex, lastPageIndex);
    }, [orderedPosts, currentPage]);

    return (
        <>
            <PageHero
                className="bg-gray-50"
                label="Resources"
                title="Untitled blog"
                description="Tool and strategies modern teams need to help their companies grow."
            />
            <div ref={contentRef} className="w-full md:max-w-[1216px] mt-16 md:mt-24 md:mx-auto px-4">
                <div className="sm:flex sm:justify-between mb-12">
                    <Search searchQuery={outletContext.searchQuery} handleSearch={outletContext.handleSearchChange}/>
                    <OrderPosts orderBy={handlePostsOrder}/>
                </div>
                <PostsList posts={currentPostsData}/>
                <Pagination
                    currentPage={currentPage}
                    totalCount={orderedPosts.length}
                    pageSize={outletContext.postsPerPage}
                    scrollToElement={contentRef}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </>
    );
};

export default Home;