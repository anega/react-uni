import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';

const Footer = () => (
    <footer className="bg-blue-750 mt-[210px]">
        <div
            className="-translate-y-1/2 md:max-w-[1216px] lg:flex lg:justify-between lg:align-start mx-4 xl-custom:mx-auto px-6 py-10 md:p-16 rounded-2xl bg-gray-50 shadow-bigbox">
            <div>
                <h3 className="mb-4 text-3xl font-semibold">Start your free trial</h3>
                <p className="mb-8 text-lg text-slate-600 lg:mb-0">Join over 4,000+ startups already growing with
                    Untitled.</p>
            </div>
            <div className="lg:flex">
                <Link to="#"
                      className="block font-semibold lg:self-start lg:order-2 md:max-w-[300px] mb-3 md:mx-auto py-3 lg:px-5 text-center text-base text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-700 rounded-lg border border-solid border-purple-600">Get
                    started</Link>
                <Link to="#"
                      className="block font-semibold lg:self-start lg:order-1 md:max-w-[300px] md:mx-auto lg:mr-3 py-3 lg:px-5 text-center text-base text-blue-650 bg-white hover:bg-gray-50 active:bg-gray-50 rounded-lg border border-solid bordergray-120">Learn
                    more</Link>
            </div>
        </div>
        <div className="mx-4 md:max-w-[1216px] xl-custom:mx-auto">
            <div className="md:flex md:justify-between md:items-start md:mb-16">
                <div>
                    <Logo linkTo="/"
                          title="Untitled UI"
                          wrapClasses="mb-8 md:mb-10 block"
                          themeDark={true}/>
                    <nav className="mb-12 md:mb-0">
                        {[['Home', '/'], ['Categories', 'categories'], ['Testlink', '/']].map(([title, url], index) => (
                            <Link
                                key={index}
                                to={url}
                                className="block md:inline-block pb-3 md:pb-0 md:px-4 md:first:pl-0 md:last:pr-0 text-white hover:text-gray-300"
                            >{title}</Link>
                        ))}
                    </nav>
                </div>
                <div
                    className="mb-12 md:mb-0">
                    <h3 className="mb-4 font-semibold text-sm text-white">Stay up to date</h3>
                    <div className="md:flex">
                        <input type="email" placeholder="Enter your email"
                               className="block md:inline-block font-semibold w-full md:max-w-[300px] mb-3 py-3 px-5 rounded-lg border border-solid bordergray-120"/>
                        <Link to="#"
                              className="block md:inline-block font-semibold md:max-w-[300px] mb-3 md:ml-4 py-3 md:px-5 lg:px-5 text-center text-base text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-700 rounded-lg border border-solid border-purple-600">Subscribe</Link>
                    </div>
                </div>
            </div>
            <div
                className="md:flex md:justify-between md:items-start pt-8 pb-12 border-t border-solid bordergray-550 text-base textgray-120">
                <div className="mb-4 md:order-2">
                    {['Terms', 'Privacy', 'Cookies'].map((title, index) => (
                        <Link key={index} to="/" className="px-2 first:pl-0 last:pr-0 hover:text-white md:textgray-450 md:hvoer:textgray-450">{title}</Link>
                    ))}
                </div>
                <p className=" md:order-1">© 2077 Untitled UI. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;