import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => (
    <footer className="bg-[#1D2939] mt-[210px]">
        <div
            className="-translate-y-1/2 md:max-w-[1216px] lg:flex lg:justify-between lg:align-start mx-4 xl-custom:mx-auto px-6 py-10 rounded-2xl bg-gray-50 shadow-bigbox">
            <div>
                <h3 className="mb-4 text-3xl font-semibold">Start your free trial</h3>
                <p className="mb-8 lg:mb-0 text-lg text-slate-600">Join over 4,000+ startups already growing with Untitled.</p>
            </div>
            <div className="lg:flex">
                <Link to="#"
                      className="block font-semibold lg:self-start lg:order-2 md:max-w-[300px] mb-3 md:mx-auto py-3 lg:px-5 text-center text-base text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-700 rounded-lg border border-solid border-purple-600">Get started</Link>
                <Link to="#"
                      className="block font-semibold lg:self-start lg:order-1 md:max-w-[300px] md:mx-auto lg:mr-3 py-3 lg:px-5 text-center text-base text-[#344054] bg-white hover:bg-gray-50 active:bg-gray-50 rounded-lg border border-solid border-[#D0D5DD]">Learn more</Link>
            </div>
        </div>
        <div>
            test test <br/>
            test test <br/>
            test test <br/>
            test test <br/>
            test test <br/>
            test test <br/>
            test test <br/>
            test test <br/>
            test test <br/>
            test test <br/>
            test test <br/>
            test test <br/>
        </div>
    </footer>
);

export default Footer;