import React from 'react';
import PostListItem from '../PostListItem/PostListItem';

const PostsList = ({posts, className}) => {
    return (
        <div className={`sm:grid sm:gap-8 lg:flex-1 ${className}`}>
            {posts.map(post => (
                <PostListItem key={post.id} post={post}/>
            ))}
        </div>
    );
};

export default PostsList;