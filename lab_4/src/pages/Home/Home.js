import React from 'react';
import PageHero from "../../components/PageHero/PageHero";
import PostsList from "../../components/PostsList/PostsList";

const Home = () => (
    <>
        <PageHero
            className="bg-gray-50"
            label="Resources"
            title="Untitled blog"
            description="Tool and strategies modern teams need to help their companies grow."
        />
        <PostsList/>
    </>
);

export default Home;