import React from 'react';
import {FiArrowUpRight} from 'react-icons/fi';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

const PostListItem = ({post, currentPage, leadingPostWrapperClass}) => {
    return (
        <div className={clsx(currentPage === 1 && 'post-preview-first-page', leadingPostWrapperClass, 'mb-8', 'sm:mb-0', 'overflow-hidden', 'border', 'border-solid', 'border-gray-90', 'rounded-2xl')}>
            <div className="relative">
                <img src={post.image.preview} alt={`${post.title} post`}
                     className="object-cover w-full sm:max-w-[560px] sm:h-full min-h-[180px]"/>
                <div className="absolute inset-x-0 bottom-0 bg-post-img-text">
                    <div className="flex justify-between border border-solid border-white/50 bg-white/30 p-4 sm:p-6 text-white backdrop-blur-md align-start">
                        <div>
                            <p className="text-sm font-semibold">{post.author.name}</p>
                            <Moment date={post.date} format={'DD MMM YYYY'} className="text-sm"/>
                        </div>
                        <p className="text-sm font-semibold text-right">{post.category[0].name}</p>
                    </div>
                </div>
            </div>
            <div className="post-preview-text px-6 pt-6 pb-8 sm:px-6 sm:py-8">
                <h1 className="mb-2">
                    <Link to={`/post/${post.id}`}
                          className="block first-letter:capitalize truncate text-xl sm:text-2xl text-blue-800 hover:text-black active:text-black font-semibold cursor-pointer hover:underline active:underline">{post.title}</Link>
                </h1>
                <p className="mb-6 text-base textgray-550">{post.body.replace(/<[^>]+>/g, '').substring(0, 120)}{post.body.length >= 20 && '...'}</p>
                <Link to={`/post/${post.id}`}
                      className="text-base font-semibold text-purple-600 hover:text-purple-800 hover:underline active:text-purple-800 active:underline">Read
                    post<FiArrowUpRight size="18" className="mb-1 ml-1 inline-block"/></Link>
            </div>
        </div>
    );
};

export default PostListItem;