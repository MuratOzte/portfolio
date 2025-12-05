import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
    useInView,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Kopernik from './about/Kopernik';
import Lfu from './about/Lfu';
import Wsolv from './about/Wsolv';
import Baykar from './about/Baykar';

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
    const fourthContainer = useRef(null); // 4. container

    useInView(titleContainer);

    useEffect(() => {
        if (scrollPosition > 700) {
            firstContainer.current.style.position = 'sticky';
            firstContainer.current.style.top = '0px';
        }
        if (scrollPosition > 700 && scrollPosition < 1400) {
            secondContainer.current.style.position = 'sticky';
            secondContainer.current.style.top = '0px';
        }
        if (scrollPosition > 1400 && scrollPosition < 2100) {
            thirdContainer.current.style.position = 'sticky';
            thirdContainer.current.style.top = '0px';
        }
        if (scrollPosition > 2100 && scrollPosition < 2800) {
            fourthContainer.current.style.position = 'sticky';
            fourthContainer.current.style.top = '0px';
        }
    }, [scrollPosition]);

    const zIndex = useTransform(scrollY, [700, 1250], [30, 0]);
    const opacity = useTransform(scrollY, [800, 1300], [1, 0]);

    // 1. container animasyonları (Baykar)
    const scale1 = useTransform(scrollY, [1600, 1900], [1, 0.9]);
    const blur1 = useTransform(
        scrollY,
        [1600, 1900],
        ['blur(0px)', 'blur(12px)']
    );

    // 2. container animasyonları (Kopernik)
    const scale2 = useTransform(scrollY, [2300, 2600], [1, 0.9]);
    const blur2 = useTransform(
        scrollY,
        [2300, 2600],
        ['blur(0px)', 'blur(12px)']
    );

    // 3. container animasyonları (Lfu)
    const scale3 = useTransform(scrollY, [3000, 3300], [1, 0.9]);
    const blur3 = useTransform(
        scrollY,
        [3000, 3300],
        ['blur(0px)', 'blur(12px)']
    );

    return (
        <div>
            <motion.p
                ref={titleContainer}
                style={{ opacity, zIndex }}
                className="bg-yellow-300 w-full h-screen overflow-hidden flex justify-center items-center text-8xl sticky top-0 z-30 tracking-wider uppercase font-bold drop-shadow-lg"
            >
                <p className="bg-[url('/src/assets/about-bg/bg-7.jpg')] bg-cover bg-center text-transparent bg-clip-text bg-fixed">
                    {t('ui.experiences')}
                </p>
            </motion.p>

            {/* 1 – Baykar */}
            <motion.div
                className="from-yellow-200 to-yellow-300 bg-gradient-to-t w-full h-screen overflow-hidden"
                style={{
                    scale: scale1,
                    filter: blur1,
                }}
                ref={firstContainer}
            >
                <Baykar />
            </motion.div>

            {/* 2 – Kopernik */}
            <motion.div
                ref={secondContainer}
                style={{
                    scale: scale2,
                    filter: blur2,
                }}
                className="from-yellow-200 to-yellow-300 bg-gradient-to-t w-full h-screen z-10 overflow-hidden shadow-lg"
            >
                <Kopernik />
            </motion.div>

            {/* 3 – Lfu */}
            <motion.div
                ref={thirdContainer}
                style={{
                    scale: scale3,
                    filter: blur3,
                }}
                className="from-yellow-200 to-yellow-300 bg-gradient-to-t w-full h-screen z-20 overflow-hidden shadow-lg"
            >
                <Lfu />
            </motion.div>

            {/* 4 – Wsolv (animasyonsuz, istersen scale/blur ekleyebilirsin) */}
            <motion.div
                ref={fourthContainer}
                className="from-yellow-200 to-yellow-300 bg-gradient-to-t w-full h-screen z-30 overflow-hidden shadow-lg"
            >
                <Wsolv />
            </motion.div>
        </div>
    );
};

export default About;
