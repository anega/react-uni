import React from 'react';

const PageHero = ({label, title, description, className}) => (
    <div className={className}>
        <div className="w-full md:max-w-[1216px] md:mx-auto py-16 sm:py-24 px-4">
            <h2 className="mb-3 text-purple-600 text-sm sm:text-base font-semibold">{label}</h2>
            <h1 className="mb-4 sm:mb-6 text-blue-800 text-4xl sm:text-5xl font-semibold">{title}</h1>
            <p className="textgray-550 text-lg sm:text-xl">{description}</p>
        </div>
    </div>
);

export default PageHero;