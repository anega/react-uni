import React from 'react';
import {default as AboutUsComponent} from '../../components/AboutUs/AboutUs/AboutUs';
import WhoWeAre from "../../components/AboutUs/WhoWeAre/WhoWeAre";
import Process from "../../components/AboutUs/Process/Process";
import MissionVision from "../../components/AboutUs/MissionVision/MissionVision";
import Benefits from "../../components/AboutUs/Benefits/Benefits";
import OurTeam from "../../components/AboutUs/OurTeam/OurTeam";

const AboutUs = () => {
    return (
        <>
            <AboutUsComponent/>
            <WhoWeAre/>
            <Process/>
            <MissionVision/>
            <Benefits/>
            <OurTeam/>
        </>
    );
};

export default AboutUs;