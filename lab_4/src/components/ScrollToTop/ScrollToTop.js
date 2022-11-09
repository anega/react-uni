import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollToTop = ({children}) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, [pathname]);

    return children;
};

export default ScrollToTop;