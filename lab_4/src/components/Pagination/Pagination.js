import React from 'react';
import clsx from 'clsx';
import {DOTS, usePagination} from 'hooks/usePagination';
import './Pagination.css';

export const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
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
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul className={clsx('pagination-container', 'mt-8', className)}>
            <li className={clsx('pagination-item', currentPage === 1 && 'disabled')}
                onClick={onPrevious}>
                <div className="arrow left"/>
            </li>
            {paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                    return <li key={index} className="pagination-item dots">&#8230;</li>;
                }

                return (
                    <li className={clsx('pagination-item', pageNumber === currentPage && 'selected')}
                        onClick={() => onPageChange(pageNumber)}>
                        {pageNumber}
                    </li>
                );
            })}
            <li className={clsx('pagination-item', currentPage === lastPage && 'disabled')}
                onClick={onNext}>
                <div className="arrow right"/>
            </li>
        </ul>
    );
};
