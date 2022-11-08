import Layout from 'pages/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="categories" element={<Categories/>}/>
                <Route path="categories/:categoryName" element={<Categories/>}/>
                <Route path="post/:id" element={<p>test post</p>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;
