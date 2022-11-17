import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import Moment from 'react-moment';
import PageHero from '../../components/PageHero/PageHero';
import PostsList from '../../components/PostsList/PostsList';
import Pagination from '../../components/Pagination';
import RecentPostsSlider from '../../components/RecentPostsSlider/RecentPostsSlider';
import postsList from 'data/posts-sorted.json';

const postsPerPage = 6;

const Post = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const contentRef = useRef();
    const [currentPage, setCurrentPage] = useState(1);
    const post = postsList.find((post) => parseInt(post.id) === parseInt(id));
    const relatedPosts = postsList.filter((relatedPost) => post.related_posts.includes(relatedPost.id));

    useEffect(() => {
        if (!post) navigate('/not-found');
    }, [post])

    const currentPostsData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * postsPerPage;
        const lastPageIndex = firstPageIndex + postsPerPage;
        return relatedPosts.slice(firstPageIndex, lastPageIndex);
    }, [relatedPosts]);

    return (
        <>
            <PageHero label="Our blog"
                      title="Resources and insights"
                      description="The latest industry news, interviews, technologies, and resources."
                      className="text-center"/>
            <div className="w-full md:max-w-[1216px] mt-4 md:mt-8 mb-16 md:mx-auto px-4">
                <article>
                    <img src={post.image.full} alt={post.title} className="w-full block mb-6"/>
                    <p className="mb-2 font-semibold text-sm text-[#6941C6]">{post.author.name} • <Moment
                        date={post.date}
                        format={'DD MMM YYYY'}
                        className="text-sm"/>
                    </p>
                    <h1 className="mb-2 font-semibold text-xl text-[#101828] first-letter:capitalize">{post.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: post.body}}
                         className="mb-6 text-base text-[#475467] [&>p]:mt-2"/>
                    <div>
                        {post.category.map((category, index) => (
                            <Link key={index}
                                  to={`/categories/${category.name.replace(/\s+/g, '-').toLowerCase()}`}
                                  className="inline-block mr-2 px-2.5 py-0.5 rounded-2xl font-medium text-sm hover:underline"
                                  style={{
                                      background: category.background,
                                      color: category.color
                                  }}>{category.name}</Link>
                        ))}
                    </div>
                </article>
                <div>
                    <div ref={contentRef}></div>
                    <PostsList posts={currentPostsData} className="sm:grid-cols-2 lg:grid-cols-3 sm:mt-16"/>
                    <Pagination
                        currentPage={currentPage}
                        totalCount={relatedPosts.length}
                        pageSize={postsPerPage}
                        scrollToElement={contentRef}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>
            <RecentPostsSlider/>
        </>
    );
};

export default Post;