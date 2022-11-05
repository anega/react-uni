import React from 'react';
import {Link} from "react-router-dom";
import {FiArrowUpRight} from "react-icons/fi";

const PostListItem = ({post}) => {
    return (
        <div className="mb-8 sm:mb-0 overflow-hidden border border-solid border-[#EAECF0] rounded-2xl">
            <div className="relative">
                {/*<img src={post.image.preview} alt={`Image for ${post.title} post`}/>*/}
                <img
                    src="https://i.guim.co.uk/img/media/173c22d9644ca33a59296166b92a29f7e19a2cfa/0_452_4184_2510/master/4184.jpg?width=465&quality=85&dpr=1&s=none"
                    alt=""
                    className="w-full object-cover max-h-[240px] sm:max-h-[280px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-post-img-text">
                    <div
                        className="flex justify-between border border-solid border-white/50 bg-white/30 p-4 sm:p-6 text-white backdrop-blur-md align-start">
                        <div>
                            <p className="text-sm font-semibold">{post.author.name}</p>
                            <p className="text-sm">20 Jan 2022</p>
                        </div>
                        <p className="text-sm font-semibold">{post.category[0]}</p>
                    </div>
                </div>
            </div>
            <div className="px-6 pt-6 pb-8 sm:px-6 sm:py-8">
                <h1 className="mb-2">
                    <Link to="#"
                          className="text-xl sm:text-2xl text-[#101828] hover:text-black active:text-black font-semibold cursor-pointer hover:underline active:underline">UX
                        review presentations</Link>
                </h1>
                <p className="mb-6 text-base text-[#475467]">How do you create compelling presentations that wow your
                    colleagues and impress your managers?</p>
                <Link to="#"
                      className="text-base font-semibold text-purple-600 hover:text-purple-800 hover:underline active:text-purple-800 active:underline">Read
                    post<FiArrowUpRight size="18" className="mb-1 ml-1 inline-block"/></Link>
            </div>
        </div>
    );
};

export default PostListItem;