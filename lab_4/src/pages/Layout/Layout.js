import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import postsList from '../../data/posts-sorted.json';
import {useDebounce} from '../../hooks/useDebounce';

const postsPerPage = 8;

const Layout = () => {
    const location = useLocation();
    const [searchStr, setSearchStr] = useState('');
    const handleSearch = (query) => setSearchStr(() => query);
    const debouncedSearchQuery = useDebounce(searchStr, 400);
    const posts = postsList.filter(post => {
        if (debouncedSearchQuery === '') return post;
        return post.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) && post;
    });

    useEffect(() => {
        setSearchStr('');
    }, [location]);

    return (
        <ScrollToTop>
            <Header/>
            <Outlet context={{
                posts: posts,
                postsPerPage: postsPerPage,
                searchQuery: searchStr,
                handleSearchChange: handleSearch
            }}/>
            <Footer/>
        </ScrollToTop>
    );
};

export default Layout;