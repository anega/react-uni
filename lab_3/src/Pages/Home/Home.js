import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => (
    <div className="home-page">
        <div className="content-wrap">
            <Header/>
            <h1>Home page</h1>
            <div>Content</div>
        </div>
        <Footer/>
    </div>
);

export default Home;