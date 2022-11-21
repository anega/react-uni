import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import postsList from '../../data/posts-sorted.json';
import {useDebounce} from '../../hooks/useDebounce';

const postsPerPage = 8;

export const Layout = () => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchStr, setSearchStr] = useState('');
    const handleCurrentPage = (page) => setCurrentPage(page);
    const handleSearch = (query) => {
        if (query !== '' && currentPage !== 1) {
            setCurrentPage(1);
        }
        setSearchStr(() => query)
    };
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
                handleSearchChange: handleSearch,
                currentPage: currentPage,
                handleCurrentPage: handleCurrentPage
            }}/>
            <Footer/>
        </ScrollToTop>
    );
};
