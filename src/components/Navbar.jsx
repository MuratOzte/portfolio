import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants/index';
import { menu, close } from '../assets';
import logo from '../assets/logo.png';
import LanguageToggle from './animated/LanguageSwitch';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 z-50 bg-yellow-300 `}
        >
            <div className="w-full flex justify-between items-center max-w-full mx-auto bg-transparent">
                <Link
                    to={'/'}
                    className="flex items-center gap-2 bg-transparent"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-11 h-11 object-contain bg-transparent"
                    />
                    <p className="text-gray-700 text-[18px] font-bold cursor-pointer bg-transparent">
                        Murat Öztürk
                    </p>
                </Link>
                <LanguageToggle />

                {/* Desktop Links */}
                <ul className="list-none hidden sm:flex flex-row gap-10 bg-yellow-300">
                    {navLinks.map((el) => (
                        <li
                            key={el.id}
                            onClick={() => setActive(el.title)}
                            className="bg-yellow-300"
                        >
                            <a
                                className={`text-gray-700 bg-yellow-300 hover:text-amber-700 text-[18px] font-medium cursor-pointer ${
                                    active === el.title ? 'font-semibold' : ''
                                }`}
                                href={`#${el.id}`}
                            >
                                {el.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="sm:hidden flex flex-1 justify-end items-center mr-4 bg-yellow-300 ">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer bg-yellow-300 text-gray-700"
                        onClick={() => setToggle((prev) => !prev)}
                    />
                </div>

                {/* Mobile Full-Screen Menu */}
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-slate-800 transition-transform duration-300 ${
                        toggle ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col justify-center items-center h-full gap-6">
                        {navLinks.map((el) => (
                            <a
                                key={el.id}
                                href={`#${el.id}`}
                                className="text-gray-300 text-2xl hover:text-white font-semibold"
                                onClick={() => {
                                    setActive(el.title);
                                    setToggle(false);
                                }}
                            >
                                {el.title}
                            </a>
                        ))}
                    </div>
                    <button
                        className="absolute top-6 right-6 text-gray-300 text-3xl"
                        onClick={() => setToggle(false)}
                    >
                        ✕
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
