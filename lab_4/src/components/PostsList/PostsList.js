import React from 'react';
import PostListItem from '../PostListItem/PostListItem';

const PostsList = ({posts}) => {
    return (
        <div className="sm:grid sm:grid-cols-2 sm:gap-8 lg:flex-1">
            {posts.map(post => (
                <PostListItem key={post.id} post={post}/>
            ))}
        </div>
    );
};

export default PostsList;