import React from 'react';
import PostItem from "./PostItem";
import './PostList.css';

const PostList = ({posts}) => (
    <div className="blog-posts">
        {posts.map((postItem, index) => (
            <PostItem key={index} post={postItem}/>
        ))}
    </div>
);

export default PostList;