import React from 'react';
import {data} from '../../../data/blogData';
import './Blog.css';
import PostList from "./PostList";

const Blog = () => (
    <div className="section blog">
        <div className="section-inner">
            <h2>{data.title}</h2>
            <PostList posts={data.posts}/>
        </div>
    </div>
);

export default Blog;