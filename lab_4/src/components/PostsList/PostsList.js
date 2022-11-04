import React from 'react';
import postsList from '../../data/test.json';
import PostListItem from "../PostListItem/PostListItem";

const PostsList = () => {
    return (
        <div className="w-full md:max-w-[1216px] mt-12 md:mx-auto px-4 sm:grid sm:grid-cols-2 sm:gap-8">
            {postsList.map(post => (
                <PostListItem key={post.id} post={post}/>
            ))}
        </div>
    );
};

export default PostsList;