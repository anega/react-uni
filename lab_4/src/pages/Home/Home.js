import React from 'react';
import {useOutletContext} from 'react-router-dom';
import OrderPosts from '../../components/OrderPosts/OrderPosts';
import PageHero from '../../components/PageHero/PageHero';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';

const Home = () => {
    const outletContext = useOutletContext();

    return (
        <>
            <PageHero
                className="bg-gray-50"
                label="Resources"
                title="Untitled blog"
                description="Tool and strategies modern teams need to help their companies grow."
            />
            <div className="w-full md:max-w-[1216px] mt-16 md:mt-24 md:mx-auto px-4 ">
                <div className="sm:flex sm:justify-between">
                    <Search searchQuery={outletContext.searchQuery} handleSearch={outletContext.handleSearchChange}/>
                    <OrderPosts/>
                </div>
                <PostsList posts={outletContext.posts}/>
            </div>
        </>
    );
};

export default Home;