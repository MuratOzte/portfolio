import { Tooltip } from '@mui/material';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { BiCategory } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';
import { FaLinkedin } from 'react-icons/fa6';

const About = () => {
    const { scrollY } = useScroll();
    const [scrollPosition, setScrollPosition] = useState(0);
    useMotionValueEvent(scrollY, 'change', (latest) =>
        setScrollPosition(latest)
    );

    const firstContainer = useRef(null);
    const secondContainer = useRef(null);
    const thirdContainer = useRef(null);

    useEffect(() => {
        if (scrollPosition > 700) {
            firstContainer.current.style.position = 'sticky ';
            firstContainer.current.style.top = '0px';
        }
        if (scrollPosition > 700 && scrollPosition < 1400) {
            secondContainer.current.style.position = 'sticky ';
            secondContainer.current.style.top = '0px';
        }
        if (scrollPosition > 1400 && scrollPosition < 2100) {
            thirdContainer.current.style.position = 'sticky ';
            thirdContainer.current.style.top = '0px';
        }
    }, [scrollPosition]);

    return (
        <div>
            <div
                className="bg-yellow-300 w-full h-screen overflow-hidden"
                ref={firstContainer}
            >
                <div className="my-12 mx-8 bg-yellow-300 flex">
                    <div className="w-1/2 flex flex-col items-center justify-center bg-yellow-300 mt-24">
                        <div className='bg-yellow-300 flex gap-8'>
                            <h1 className='bg-yellow-300' >Front-end Developer Intern</h1>
                            <h1 className='bg-gray-600 px-2 py-1 rounded-md shadow-md' >02/2025 - 05/2025</h1>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col items-center justify-center bg-yellow-300 mt-24">
                        <a
                            className="bg-yellow-300"
                            href="https://kopernik.com.tr/"
                            target="_blank"
                        >
                            <img
                                src="https://media.licdn.com/dms/image/v2/D4D0BAQGug8UDNhQ2pw/company-logo_200_200/B4DZd3u_DZHkAI-/0/1750060496120/kopernik_tr_logo?e=1757548800&v=beta&t=dcOstwPhAjlCO_OKpcwaDcuy5n5cg5oz7rMx2vnRORs"
                                className="w-28 mb-6 rounded-full border border-white shadow-md hover:scale-105 transition-all duration-150 cursor-pointer"
                            />
                        </a>
                        <h1 className="bg-yellow-300 text-5xl font-bold text-gray-700">
                            Kopernik Software Agency
                        </h1>
                        <div className="bg-yellow-300 flex justify-center items-center mt-4 space-x-2">
                            <BiCategory
                                className="bg-yellow-300 text-gray-700"
                                size={36}
                            />
                            <h1 className="bg-yellow-300 text-gray-700 font-semibold ">
                                <span className="bg-yellow-300 font-bold">
                                    Category :
                                </span>{' '}
                                Technology , Information and Media
                            </h1>
                        </div>
                        <div className="bg-yellow-300 flex justify-center items-center mt-4 space-x-2">
                            <CgWebsite
                                className="bg-yellow-300 text-gray-700"
                                size={36}
                            />
                            <a href="https://kopernik.com.tr/" target="_blank">
                                <h1 className="bg-yellow-300 text-gray-700 font-semibold">
                                    <span className="bg-yellow-300 font-bold ">
                                        Website :
                                    </span>{' '}
                                    https://kopernik.com.tr
                                </h1>
                            </a>
                        </div>
                        <div className="bg-yellow-300 flex justify-center items-center mt-4 space-x-2">
                            <FaLinkedin
                                className="text-blue-500 bg-transparent"
                                size={36}
                                enableBackground={true}
                            />
                            <a
                                href="https://www.linkedin.com/company/kopernik-tr/"
                                target="_blank"
                            >
                                <h1 className="bg-yellow-300 text-gray-700 font-semibold">
                                    <span className="bg-yellow-300 font-bold ">
                                        Linkedin :
                                    </span>{' '}
                                    https://www.linkedin.com/company/kopernik-tr
                                </h1>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                ref={secondContainer}
                className="bg-yellow-400 w-full h-screen z-10 overflow-hidden"
            ></div>
            <div
                ref={thirdContainer}
                className="bg-yellow-300 w-full h-screen z-20"
            ></div>
        </div>
    );
};

export default About;
