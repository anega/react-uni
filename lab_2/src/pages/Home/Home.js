import React from 'react';
import Banner from "../../components/Home/Banner/Banner";
import HowWeWork from "../../components/Home/HowWeWork/HowWeWork";
import Projects from "../../components/Home/Projects/Projects";
import Features from "../../components/Home/Features/Features";
import Faq from "../../components/Home/Faq/Faq";

const Home = () => {
    return (
        <>
            <Banner/>
            <HowWeWork/>
            <Projects/>
            <Features/>
            <Faq/>
        </>
    );
};

export default Home;