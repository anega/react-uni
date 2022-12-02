import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import clsx from 'clsx';

const mainMenu = [['Home', '/'], ['Categories', 'categories'], ['Testlink', '/']];

const Header = () => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    const handleDropdownMenu = () => {
        setIsMenuShown((prevState) => !prevState);
    }

    const hideMenuOnRouteChange = () => {
        setIsMenuShown(false);
    }

    return (
        <header className="bg-gray-50 border-solid border-b border-gray-60">
            <div
                className="relative flex justify-between items-center w-full py-5 px-4 md:max-w-[1216px] md:mx-auto">
                <div className="flex items-center">
                    <h1>
                        <Link to="/">
                            <img className="w-[121px] h-[32px]" src={logo} alt="logo"/>
                        </Link>
                    </h1>
                    <nav className="hidden px-2 md:block">
                        {mainMenu.map(([title, href], index) => (
                            <Link key={index} to={href}
                                  className="px-4 text-base text-gray-600 hover:text-gray-700 active:text-gray-700">{title}</Link>
                        ))}
                    </nav>
                    <nav
                        className={clsx(isMenuShown && 'translate-x-0', !isMenuShown && '-translate-x-full', 'md:hidden', 'transition-transform', 'absolute', 'flex', 'flex-col', 'bg-gray-50', 'top-[100%]', 'left-0 right-0 pb-3 z-10')}>
                        {mainMenu.map(([title, href], index) => (
                            <Link key={index}
                                  to={href}
                                  onClick={hideMenuOnRouteChange}
                                  className="border-b border-solid border-gray-100 py-2 pr-6 pl-4 text-base active:bg-gray-200">{title}</Link>
                        ))}
                        <Link to="/"
                              onClick={hideMenuOnRouteChange}
                              className="border-b border-solid border-gray-100 py-2 pr-6 pl-4 text-base active:bg-gray-200">Log
                            in</Link>
                        <Link to="/"
                              onClick={hideMenuOnRouteChange}
                              className="py-2 pr-6 pl-4 text-base active:bg-gray-200">Sign up</Link>
                    </nav>
                </div>
                <div className="hidden md:block">
                    <Link to="/" className="pr-7 text-base text-gray-600 hover:text-gray-700 active:text-gray-700">Log
                        in</Link>
                    <Link to="/"
                          className="bg-purple-600 hover:bg-purple-700 active:bg-purple-700 rounded-lg text-base text-white px-4 py-2.5">Sign
                        up</Link>
                </div>
                {isMenuShown
                    ? <AiOutlineClose color="#344054" size="20" className="md:hidden" onClick={handleDropdownMenu}/>
                    : <AiOutlineMenu color="#344054" size="20" className="md:hidden" onClick={handleDropdownMenu}/>
                }
            </div>
        </header>
    );
};

export default Header;