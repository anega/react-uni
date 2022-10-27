import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Header = () => {
    const [isMenuShown, setIsMenuHidden] = useState(false);

    function handleDropdownMenu() {
        setIsMenuHidden((prevState) => !prevState);
    }

    return (
        <header className="relative flex justify-between items-center bg-gray-50 py-5 pr-6 pl-4">
            <div className="flex items-center">
                <h1>
                    <Link to="/">
                        <img className="w-[121px] h-[32px]" src={logo} alt="logo"/>
                    </Link>
                </h1>
                <nav className={isMenuShown
                    ? "transition-transform translate-x-0 absolute flex flex-col bg-gray-50 top-[100%] left-0 right-0 pb-3"
                    : "transition-transform -translate-x-full absolute flex flex-col bg-gray-50 top-[100%] left-0 right-0 pb-3"}>
                    {['Home', 'Categories', 'Testlink'].map((title, index) => (
                        <Link key={index}
                              to="/"
                              className="text-base py-2 pr-6 pl-4 active:bg-gray-200 border-solid border-b border-gray-100">{title}</Link>
                    ))}
                    <Link to="/"
                          className="text-base py-2 pr-6 pl-4 active:bg-gray-200 border-solid border-b border-gray-100">Log
                        in</Link>
                    <Link to="/" className="text-base py-2 pr-6 pl-4 active:bg-gray-200">Sign up</Link>
                </nav>
            </div>
            {isMenuShown
                ? <AiOutlineClose color="#344054" size="20" className="md:hidden" onClick={handleDropdownMenu}/>
                : <AiOutlineMenu color="#344054" size="20" className="md:hidden" onClick={handleDropdownMenu}/>
            }


        </header>
    );
};

export default Header;