import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Outlet} from "react-router-dom";
import './Layout.css';

const Layout = () => (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
);

export default Layout;
