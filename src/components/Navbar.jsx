import React, { useState } from 'react'
import { NAV_LINKS } from '../constants';
import Logo from './common/Logo';
import SearchInput from './common/SearchInput';
import Button from './common/Button';
import userPng from '../assets/user.png'
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between w-full h-16 bg-white px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex items-center space-x-4 md:space-x-10">
                <Logo />

                <ul className="hidden  md:flex space-x-6  lg:space-x-3  2xl:space-x-6">
                    <li className="font-neueBold text-li">
                        <a
                            className="font-extrabold text-nowrap text-primary hover:text-primary-dark"
                            href="/top-companies"
                        >
                            Find Jobs
                        </a>
                    </li>
                    {NAV_LINKS.map((link) => (
                        <li
                            className="font-neueRoman text-nowrap  font-medium text-lightGrey   lg:text-li"
                            key={link.name}
                        >
                            <a href={link.path} className="hover:text-primary">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
                <div className="hidden md:block">
                    <SearchInput />
                </div>

                <Button className="hidden sm:block">Resume Builder</Button>

                <img
                    src={userPng}
                    loading="lazy"
                    className="w-10 h-10 rounded-full border-2 border-gray-200"
                    alt="User"
                />

                <button
                    className="md:hidden p-2 text-gray-600 hover:text-primary focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden transition-all absolute top-16 left-0 w-full bg-white shadow-lg z-50">
                    <ul className="flex flex-col space-y-4 p-4">
                        <li className="font-neueBold text-li">
                            <a
                                className="font-extrabold text-nowrap text-primary hover:text-primary-dark"
                                href="/top-companies"
                            >
                                Find Jobs
                            </a>
                        </li>
                        {NAV_LINKS.map((link) => (
                            <li
                                className="font-neueRoman text-nowrap font-medium text-lightGrey text-li"
                                key={link.name}
                            >
                                <a href={link.path} className="hover:text-primary">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};


export default Navbar;