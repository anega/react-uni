import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import postsList from '../../data/posts-sorted.json';

const Layout = () => {
    const location = useLocation();
    const [searchStr, setSearchStr] = useState('');
    const handleSearch = (query) => setSearchStr(() => query);
    const posts = postsList.filter(post => {
        if (searchStr === '') return post;
        return post.title.toLowerCase().includes(searchStr.toLowerCase()) && post;
    });

    useEffect(() => {
        setSearchStr('');
    }, [location]);

    return (
        <ScrollToTop>
            <Header/>
            <Outlet context={{posts: posts, searchQuery: searchStr, handleSearchChange: handleSearch}}/>
            <Footer/>
        </ScrollToTop>
    );
};

export default Layout;