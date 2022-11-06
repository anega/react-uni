import React from 'react';
import PostListItem from "../PostListItem/PostListItem";

const PostsList = ({posts}) => {
    return (
        <div className="mt-12 sm:grid sm:grid-cols-2 sm:gap-8">
            {posts.map(post => (
                <PostListItem key={post.id} post={post}/>
            ))}
        </div>
    );
};

export default PostsList;