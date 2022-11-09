import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    const [isMenuShown, setIsMenuHidden] = useState(false);

    function handleDropdownMenu() {
        setIsMenuHidden((prevState) => !prevState);
    }

    // TODO: hide mobile menu on route change
    return (
        <header className="bg-gray-50 border-solid border-b border-[#F2F4F7]">
            <div
                className="relative flex justify-between items-center w-full py-5 px-4 md:max-w-[1216px] md:mx-auto">
                <div className="flex items-center">
                    <h1>
                        <Link to="/">
                            <img className="w-[121px] h-[32px]" src={logo} alt="logo"/>
                        </Link>
                    </h1>
                    <nav className="hidden px-2 md:block">
                        {[['Home', '/'], ['Categories', 'categories'], ['Testlink', '/']].map(([title, href], index) => (
                            <Link key={index} to={href}
                                  className="px-4 text-base text-gray-600 hover:text-gray-700 active:text-gray-700">{title}</Link>
                        ))}
                    </nav>
                    <nav className={isMenuShown
                        ? "md:hidden transition-transform translate-x-0 absolute flex flex-col bg-gray-50 top-[100%] left-0 right-0 pb-3 z-10"
                        : "md:hidden transition-transform -translate-x-full absolute flex flex-col bg-gray-50 top-[100%] left-0 right-0 pb-3 z-10"}>
                        {[['Home', '/'], ['Categories', 'categories'], ['Testlink', '/']].map(([title, href], index) => (
                            <Link key={index}
                                  to={href}
                                  className="border-b border-solid border-gray-100 py-2 pr-6 pl-4 text-base active:bg-gray-200">{title}</Link>
                        ))}
                        <Link to="/"
                              className="border-b border-solid border-gray-100 py-2 pr-6 pl-4 text-base active:bg-gray-200">Log
                            in</Link>
                        <Link to="/" className="py-2 pr-6 pl-4 text-base active:bg-gray-200">Sign up</Link>
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