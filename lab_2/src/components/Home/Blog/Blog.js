import React from 'react';
import './Blog.css';
import {Blog01, Blog02, Blog03} from '../../../assets/images';

const Blog = () => (
    <div className="section blog">
        <div className="section-inner">
            <h2>Our blog</h2>
            <div className="blog-posts">
                <div className="blog-post">
                    <img src={Blog01} alt=""/>
                    <p className="label-small blog-post-date">19 Jan 2022</p>
                    <h6 className="blog-post-title">
                        <a href="/#">How one Webflow user grew his single person consultancy from $0-100K in 14
                            months</a>
                    </h6>
                    <p className="blog-post-body">See how pivoting to Webflow changed one person’s sales strategy
                        and allowed him to attract</p>
                    <p className="label-small"><a href="/#" className="blog-post-link">Read More ⟶</a></p>
                </div>
                <div className="blog-post">
                    <img src={Blog02} alt=""/>
                    <p className="label-small blog-post-date">19 Jan 2022</p>
                    <h6 className="blog-post-title">
                        <a href="/#">How one Webflow user grew his single person consultancy from $0-100K in 14
                            months</a>
                    </h6>
                    <p className="blog-post-body">See how pivoting to Webflow changed one person’s sales strategy
                        and allowed him to attract</p>
                    <p className="label-small"><a href="/#" className="blog-post-link">Read More ⟶</a></p>
                </div>
                <div className="blog-post">
                    <img src={Blog03} alt=""/>
                    <p className="label-small blog-post-date">19 Jan 2022</p>
                    <h6 className="blog-post-title">
                        <a href="/#">How one Webflow user grew his single person consultancy from $0-100K in 14
                            months</a>
                    </h6>
                    <p className="blog-post-body">See how pivoting to Webflow changed one person’s sales strategy
                        and allowed him to attract</p>
                    <p className="label-small"><a href="/#" className="blog-post-link">Read More ⟶</a></p>
                </div>
            </div>
        </div>
    </div>
);

export default Blog;