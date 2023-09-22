import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants/index';
import { menu, close } from '../assets';
import logo from '../assets/logo.png';

import React from 'react';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-yellow-300 `}
        >
            <div className="w-full flex justify-between items-center max-w-full mx-auto ">
                <Link
                    to={'/'}
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-11 h-11 object-contain "
                    />
                    <p className="text-gray-700 text-[18px] font-bold cursor-pointer">
                        Murat Öztürk
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((el) => (
                        <li key={el.id} onClick={() => setActive(el.title)}>
                            <a
                                className={`text-gray-700 hover:text-amber-700 text-[18px] font-medium cursor-pointer ${
                                    active === el.title ? 'underline ' : ''
                                }`}
                                href={`#${el.id}`}
                            >
                                {el.title}{' '}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer "
                        onClick={() => setToggle((prev) => !prev)}
                    />
                </div>
                <div
                    className={`${
                        !toggle ? 'hidden' : 'flex'
                    } p-6 bg-slate-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
                >
                    <ul className="list-none flex flex-col">
                        {navLinks.map((el) => (
                            <li key={el.id} onClick={() => setActive(el.title)}>
                                <a
                                    className={`text-gray-500 hover:text-amber-700 text-[18px] font-medium cursor-pointer ${
                                        active === el.title ? 'underline ' : ''
                                    }`}
                                    href={`#${el.id}`}
                                >
                                    {el.title}{' '}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
