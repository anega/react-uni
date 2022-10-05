import React from 'react';
import {default as AboutUsComponent} from '../../components/AboutUs/AboutUs/AboutUs';
import WhoWeAre from "../../components/AboutUs/WhoWeAre/WhoWeAre";
import Process from "../../components/AboutUs/Process/Process";

const AboutUs = () => {
    return (
        <>
            <AboutUsComponent/>
            <WhoWeAre/>
            <Process/>
        </>
    );
};

export default AboutUs;