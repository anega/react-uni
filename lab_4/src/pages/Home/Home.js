import React, {useMemo, useState} from 'react';
import {useOutletContext} from 'react-router-dom';
import OrderPosts from '../../components/OrderPosts/OrderPosts';
import PageHero from '../../components/PageHero/PageHero';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import Pagination from '../../components/Pagination';

let PageSize = 10;

const Home = () => {
    const outletContext = useOutletContext();
    const [postsOrder, setPostsOrder] = useState('asc');
    let orderedPosts;

    const handlePostsOrder = (order) => {
        setPostsOrder(() => order);
    };

    switch (postsOrder) {
        case 'asc':
            orderedPosts = [...outletContext.posts];
            break;
        case 'desc':
            orderedPosts = [...outletContext.posts]
                .sort((postA, postB) => postA.date > postB.date ? 1 : -1);
            break;
        case 'az':
            orderedPosts = [...outletContext.posts]
                .sort((postA, postB) => postA.title > postB.title ? 1 : -1);
            break;
        case 'za':
            orderedPosts = [...outletContext.posts]
                .sort((postA, postB) => postA.title > postB.title ? -1 : 1);
            break;
        default:
            orderedPosts = [...outletContext.posts];
    }

    const [currentPage, setCurrentPage] = useState(1);

    const currentPostsData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
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
            <div className="w-full md:max-w-[1216px] mt-16 md:mt-24 md:mx-auto px-4">
                <div className="sm:flex sm:justify-between mb-12">
                    <Search searchQuery={outletContext.searchQuery} handleSearch={outletContext.handleSearchChange}/>
                    <OrderPosts orderBy={handlePostsOrder}/>
                </div>
                <PostsList posts={currentPostsData}/>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={orderedPosts.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </>
    );
};

export default Home;