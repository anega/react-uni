import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';

const NextArrow = ({className, onClick}) => (
    <div
        className={`transform-none w-12 h-12 md:w-14 md:h-14 flex justify-center items-center rounded-full border border-solid border-gray-90 bg-white hover:bg-gray-50 active:bg-gray-50 ${className}`}
        onClick={onClick}>
        <AiOutlineArrowRight size="14" className="textgray-450"/>
    </div>
);

export default NextArrow;