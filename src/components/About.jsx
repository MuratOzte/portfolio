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
                <div className="my-12 mx-8 bg-yellow-300 flex">
                    <div className="w-1/2">selam</div>
                    <div className="w-1/2 flex justify-center flex-col items-center bg-yellow-300">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D0BAQGug8UDNhQ2pw/company-logo_200_200/B4DZd3u_DZHkAI-/0/1750060496120/kopernik_tr_logo?e=1757548800&v=beta&t=dcOstwPhAjlCO_OKpcwaDcuy5n5cg5oz7rMx2vnRORs"
                            className="w-28 mb-6 rounded-full border border-white shadow-md"
                        />
                        <h1 className="bg-yellow-300 text-5xl font-bold text-gray-700">
                            Kopernik Yazılım Ajansı
                        </h1>
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
