import React from 'react';
import PageHero from "../../components/PageHero/PageHero";
import PostsList from "../../components/PostsList/PostsList";
import {useOutletContext} from "react-router-dom";

const Home = () => {
    const posts = useOutletContext();

    return (
        <>
            <PageHero
                className="bg-gray-50"
                label="Resources"
                title="Untitled blog"
                description="Tool and strategies modern teams need to help their companies grow."
            />
            <PostsList posts={posts}/>
        </>
    );
};

export default Home;