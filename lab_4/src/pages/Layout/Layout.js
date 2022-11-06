import React, {useState} from 'react';
import postsList from '../../data/test.json';
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
    const [searchStr, setSearchStr] = useState('');
    const handleSearch = (query) => setSearchStr(() => query);
    const posts = postsList.filter(post => {
        if (searchStr === '') return post;
        return post.title.toLowerCase().includes(searchStr.toLowerCase()) && post;
    });

    return (
        <>
            <Header/>
            <Outlet context={{posts: posts, handleSearchChange: handleSearch}}/>
            <Footer/>
        </>
    );
};

export default Layout;