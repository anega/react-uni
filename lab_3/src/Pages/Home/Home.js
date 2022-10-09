import React from 'react';
import Header from "../../components/Header/Header";
import PaletteList from "../../components/PaletteList/PaletteList";
import Footer from "../../components/Footer/Footer";

const Home = () => (
    <div className="home-page">
        <div className="content-wrap">
            <Header/>
            <PaletteList/>
        </div>
        <Footer/>
    </div>
);

export default Home;