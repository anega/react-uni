import React from 'react';
import clsx from 'clsx';
import {DOTS, usePagination} from 'hooks/usePagination';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

export const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        scrollToElement = false,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        scrollOnPageChange(scrollToElement);
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        scrollOnPageChange(scrollToElement);
        onPageChange(currentPage - 1);
    };

    const scrollOnPageChange = (refElement) => {
        const offsetTopScroll = refElement && refElement.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: offsetTopScroll ? offsetTopScroll : 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <div
            className="flex justify-between items-center mt-12 pt-4 md:pt-5 pb-16 md:pb-24 border-t border-solid border-[#EAECF0]">
            <button disabled={currentPage === 1}
                    className="disabled:bg-gray-50 cursor-pointer disabled:cursor-auto flex justify-between items-center p-3 md:pr-3.5 md:pl-4 md:py-2 text-[#344054] disabled:text-gray-400 border border-solid border-[#D0D5DD] rounded-lg shadow-pagination-btn active:shadow-none disabled:shadow-none"
                    onClick={onPrevious}>
                <AiOutlineArrowLeft size="14" color={currentPage === 1 ? '#9CA38F' : '#344054'}/>
                <span className="hidden md:block ml-3 text-sm font-semibold">Previous</span>
            </button>
            <div className="md:hidden text-sm text-[#344054]">Page <span
                className="font-semibold">{currentPage}</span> of <span className="font-semibold">{lastPage}</span>
            </div>
            <ul className="hidden md:flex">
                {paginationRange.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                        return <li key={index}
                                   className="w-10 h-10 flex justify-center items-center font-semibold text-sm mx-px">&#8230;</li>;
                    }

                    return (
                        <li key={index}
                            className={clsx(pageNumber === currentPage && 'bg-[#F9FAFB] text-[#1D2939]', pageNumber !== currentPage && 'text-[#475467]', 'w-10 h-10 flex justify-center items-center font-semibold text-sm cursor-pointer mx-px rounded-lg hover:bg-[#F9FAFB] hover:text-[#1D2939]')}
                            onClick={() => {
                                scrollOnPageChange(scrollToElement);
                                return onPageChange(pageNumber);
                            }}>{pageNumber}</li>
                    );
                })}
            </ul>
            <button disabled={currentPage === lastPage}
                    className="disabled:bg-gray-50 cursor-pointer disabled:cursor-auto flex justify-between items-center p-3 md:pl-3.5 md:pr-4 md:py-2 text-[#344054] disabled:text-gray-400 border border-solid border-[#D0D5DD] rounded-lg shadow-pagination-btn active:shadow-none disabled:shadow-none"
                    onClick={onNext}>
                <span className="hidden md:block mr-3 text-sm font-semibold">Next</span>
                <AiOutlineArrowRight size="14" color={currentPage === lastPage ? '#9CA38F' : '#344054'}/>
            </button>
        </div>
    );
};
