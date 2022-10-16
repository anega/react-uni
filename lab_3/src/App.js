import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Home from "./pages/Home/Home";
import PalettePageLayout from "./pages/PalettePageLayout/PalettePageLayout";
import './App.css';

const App = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.key}>
                <Route path="/" element={<Home/>}/>
                <Route path="palette/:id" element={<PalettePageLayout/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default App;