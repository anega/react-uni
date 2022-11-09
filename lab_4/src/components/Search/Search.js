import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

const Search = ({searchQuery, handleSearch, className}) => {
    return (
        <div className={`relative mb-4 sm:mb-0 ${className}`}>
            <AiOutlineSearch size="18" className="absolute inset-y-1/2 left-3.5 -translate-y-1/2 text-gray-500"/>
            <input
                value={searchQuery}
                onChange={(event) => handleSearch(event.target.value)}
                className="w-full sm:max-w-[280px] py-2.5 pr-3.5 pl-10 border border-solid border-[#D0D5DD] rounded-lg outline-none text-base placeholder:text-base placeholder:text-[#667085]"
                type="text"
                placeholder="Search"/>
        </div>
    );
};

export default Search;