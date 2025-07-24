import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
    useInView,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiCategory } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';
import { FaCss3, FaHtml5 } from 'react-icons/fa';
import { FaLinkedin, FaReact } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import CompanyHeader from './about/CompanyHeader';
import CompanyList from './about/CompanyList';
import Kopernik from './about/Kopernik';
import Lfu from './about/Lfu';

const About = () => {
    const { scrollY } = useScroll();
    const [scrollPosition, setScrollPosition] = useState(0);
    const { t } = useTranslation();
    useMotionValueEvent(scrollY, 'change', (latest) =>
        setScrollPosition(latest)
    );
    const titleContainer = useRef(null);
    const firstContainer = useRef(null);
    const secondContainer = useRef(null);
    const thirdContainer = useRef(null);

    const isInView = useInView(titleContainer);

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

    const zIndex = useTransform(scrollY, [700, 1250], [30, 0]);
    const opacity = useTransform(scrollY, [800, 1300], [1, 0]);
    //first container animations
    const scale1 = useTransform(scrollY, [1600, 1900], [1, 0.9]);
    const blur1 = useTransform(
        scrollY,
        [1600, 1900],
        ['blur(0px)', 'blur(12px)']
    );

    //second container animations
    const scale2 = useTransform(scrollY, [2300, 2600], [1, 0.9]);
    const blur2 = useTransform(
        scrollY,
        [2300, 2600],
        ['blur(0px)', 'blur(12px)']
    );

    return (
        <div>
            <motion.p
                ref={titleContainer}
                style={{ opacity, zIndex }}
                className="bg-yellow-300 w-full h-screen overflow-hidden flex justify-center items-center text-8xl sticky top-0 z-30 tracking-wider uppercase font-bold drop-shadow-lg 
               "
            >
                <p className="bg-[url('/src/assets/about-bg/bg-7.jpg')] bg-cover bg-center text-transparent bg-clip-text bg-fixed">
                    {t('ui.experiences')}
                </p>
            </motion.p>

            <motion.div
                className="from-yellow-200 to-yellow-300 bg-gradient-to-t w-full h-screen overflow-hidden"
                style={{
                    scale: scale1,
                    filter: blur1,
                }}
                ref={firstContainer}
            >
                <Kopernik />
            </motion.div>
            <motion.div
                ref={secondContainer}
                style={{
                    scale: scale2,
                    filter: blur2,
                }}
                className="from-yellow-200 to-yellow-300 bg-gradient-to-t w-full h-screen z-10 overflow-hidden shadow-lg"
            >
                <Lfu />
            </motion.div>
            <div
                ref={thirdContainer}
                className="bg-yellow-300 w-full h-screen z-20"
            ></div>
        </div>
    );
};

export default About;
