import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout/Layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {/*<Route index element={}/>*/}
            </Route>
        </Routes>
    );
}

export default App;
