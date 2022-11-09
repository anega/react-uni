import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import PageHero from '../../components/PageHero/PageHero';
import postsList from 'data/posts-sorted.json';
import Moment from 'react-moment';

const Post = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const post = postsList.find((post) => parseInt(post.id) === parseInt(id));

    useEffect(() => {
        if (!post) navigate('/not-found');
    }, [post])

    return (
        <>
            <PageHero label="Our blog"
                      title="Resources and insights"
                      description="The latest industry news, interviews, technologies, and resources."
                      className="text-center"/>
            <div className="w-full md:max-w-[1216px] mt-4 md:mt-8 md:mx-auto px-4">
                <img src={post.image.full} alt={post.title} className="w-full block mb-6"/>
                <p className="mb-2 font-semibold text-sm text-[#6941C6]">{post.author.name} • <Moment date={post.date}
                                                                                                      format={'DD MMM YYYY'}
                                                                                                      className="text-sm"/>
                </p>
                <h1 className="mb-2 font-semibold text-xl text-[#101828] first-letter:capitalize">{post.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.body}}
                     className="mb-6 text-base text-[#475467]"/>
                <div>
                    {post.category.map((category, index) => (
                        <p key={index}
                           className="inline-block mr-2 px-2.5 py-0.5 rounded-2xl font-medium text-sm"
                           style={{background: category.background, color: category.color}}>{category.name}</p>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Post;