import React from 'react';
import postsList from '../../data/test.json';
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
    // TODO maybe i will handle posts obj here and pass it as a context to Outlet...
    const posts = postsList;

    return (
        <>
            <Header/>
            <Outlet context={posts}/>
            <Footer/>
        </>
    );
};

export default Layout;