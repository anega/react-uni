import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import PostListItem from '../PostListItem/PostListItem';
import './RecentPostsSlider.css';
import postsList from '../../data/posts-sorted.json';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const recentPostsSliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: false,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2.2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.4,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.1,
            }
        }
    ]
};

const RecentPostsSlider = () => {
    const resentPosts = postsList.slice(0, 15);

    return (
        <div className="bg-[#F9FAFB] pt-16 md:pt-24">
            <div className="flex justify-between items-start w-full md:max-w-[1216px] md:mx-auto px-4">
                <div>
                    <h3 className="mb-4 text-3xl text-[#101828] font-semibold">Latest writings</h3>
                    <p className="text-lg text-[#475467]">The latest news, technologies, and resources from our
                        team.</p>
                </div>
                <Link to="/" className="hidden md:inline-block mx-4 py-3 px-5 text-center text-base text-white font-semibold bg-purple-600 hover:bg-purple-700 active:bg-purple-700 rounded-lg">View all posts</Link>
            </div>
            <div className="relative mt-12 md:pl-0 pb-12 md:pb-24 recent-posts-slider">
                <Slider {...recentPostsSliderSettings}>
                    {resentPosts.map(post => (
                        <div key={post.id}>
                            <div className="mr-8">
                                <PostListItem post={post}/>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <Link to="/"
                  className="block md:hidden mx-4 py-3 text-center text-base text-white font-semibold bg-purple-600 hover:bg-purple-700 active:bg-purple-700 rounded-lg">View
                all posts</Link>
        </div>
    );
};

export default RecentPostsSlider;