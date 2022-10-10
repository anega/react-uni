import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.css';
import PalettePageLayout from "./pages/PalettePageLayout/PalettePageLayout";

const App = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="palette/:id" element={<PalettePageLayout />}/>
    </Routes>
);

export default App;