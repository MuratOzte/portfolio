import { useMotionValueEvent, useScroll, motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

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
                <div className='mt-24' >
                    <h1 className='bg-yellow-300 text-5xl font-serif font-bold text-gray-700' >Kopernik Yazılım Ajansı</h1>
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
