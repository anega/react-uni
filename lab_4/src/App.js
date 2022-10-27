import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;
