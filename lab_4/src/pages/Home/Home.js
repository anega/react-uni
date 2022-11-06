import React from 'react';
import PageHero from '../../components/PageHero/PageHero';
import PostsList from '../../components/PostsList/PostsList';
import Search from '../../components/Search/Search';
import {useOutletContext} from "react-router-dom";

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
                <div>
                    <Search handleSearch={outletContext.handleSearchChange}/>
                </div>
                <PostsList posts={outletContext.posts}/>
            </div>
        </>
    );
};

export default Home;