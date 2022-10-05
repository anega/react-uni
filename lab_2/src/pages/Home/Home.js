import React from 'react';
import Banner from "../../components/Home/Banner/Banner";
import HowWeWork from "../../components/Home/HowWeWork/HowWeWork";
import Projects from "../../components/Home/Projects/Projects";

const Home = () => {
    return (
        <>
            <Banner/>
            <HowWeWork/>
            <Projects/>
        </>
    );
};

export default Home;