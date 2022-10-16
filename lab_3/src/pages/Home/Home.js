import React from 'react';
import {motion} from 'framer-motion';
import Header from "../../components/Header/Header";
import PaletteList from "../../components/PaletteList/PaletteList";
import Footer from "../../components/Footer/Footer";
import './Home.css';

const Home = () => {
    const pageTransition = {
        ease: 'easeIn',
        duration: 0.3,
    };
    return (
        <motion.div className="home-page">
            <div className="content-wrap">
                <Header/>
                <PaletteList/>
            </div>
            <Footer/>
            <motion.div
                initial={{left: 0}}
                animate={{left: '100%'}}
                exit={{left: 0}}
                transition={pageTransition}
                className="home-transition-overlay"
            />
        </motion.div>
    );
}

export default Home;