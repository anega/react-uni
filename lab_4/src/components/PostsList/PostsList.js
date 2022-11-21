import React from 'react';
import PostListItem from '../PostListItem/PostListItem';

const PostsList = ({posts, currentPage, className, leadingPostWrapperClass}) => {
    return (
        <div className={`sm:grid sm:gap-8 lg:flex-1 ${className}`}>
            {posts.map(post => (
                <PostListItem key={post.id}
                              post={post}
                              currentPage={currentPage}
                              leadingPostWrapperClass={leadingPostWrapperClass}/>
            ))}
        </div>
    );
};

export default PostsList;