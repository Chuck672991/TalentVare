import React from 'react'
import { NAV_LINKS } from '../constants';
import Logo from './common/Logo';
import SearchInput from './common/SearchInput';
import Button from './common/Button';
import userSvg from '../assets/user.svg'
export const Navbar = () => (
    <nav className="flex items-center justify-between w-full h-16 bg-white px-6 md:px-10 lg:px-16 ">
        <div className="flex items-center space-x-10   ">
            <div className='w-full flex justify-center   items-center gap-8'>

                <Logo />

                <ul className="hidden md:flex space-x-8">
                    <li className='font-neueThin  text-li' >
                        <a className='font-neueBlack text-primary' href='/top-companies'>Find Jobs</a>
                    </li>
                    {NAV_LINKS.map((link) => (
                        <li className='font-neueThin  text-li' key={link.name}>
                            <a href={link.path}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="flex h-[39px] space-x-8  w-[35vw] ">

            <SearchInput />
            <Button >
                Resume Builder
            </Button>
            <img src={userSvg} className='' alt="user" />
        </div>

    </nav>
);