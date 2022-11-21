import {Route, Routes} from 'react-router-dom';
import Layout from 'pages/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="categories" element={<Categories/>}/>
                <Route path="categories/:categoryName" element={<Categories/>}/>
                <Route path="post/:id" element={<Post/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;
