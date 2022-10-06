import React from 'react';
import './PostItem.css';

const PostItem = ({post}) => (
    <div className="blog-post">
        <img src={post.image} alt={post.title}/>
        <p className="label-small blog-post-date">{post.date}</p>
        <h6 className="blog-post-title">
            <a href={post.link.href}>{post.title}</a>
        </h6>
        <p className="blog-post-body">{post.body}</p>
        <p className="label-small">
            <a href={post.link.href} className="blog-post-link">{post.link.text}</a>
        </p>
    </div>
);

export default PostItem;