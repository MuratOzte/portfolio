import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import { useMediaQuery } from '@mui/material';

const Hero = () => {
    const matches = useMediaQuery('(max-width:700px)');
    return (
        <div className="relative mx-auto w-full h-screen bg-yellow-100 ">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row  items-start gap-5 justify-start`}
            >
                <div className="flex flex-col justify-center items-center mt-14">
                    <div className="w-5 h-5 rounded-full bg-yellow-500 " />
                    <div className="w-1 sm:h-80 h-40 yellow-gradient" />
                </div>
                <div className="flex md:flex-row flex-col justify-s gap-6 md:gap-0 items-start">
                    <div>
                        <h1 className={`${styles.heroHeadText} text-gray-600`}>
                            Hi, I'm{' '}
                            <span className="text-[#eab308]">Murat</span>
                        </h1>
                        <p
                            className={`${styles.heroSubText} text-gray-600 mt-3 `}
                        >
                            I build web applications and user interfaces
                        </p>
                    </div>
                    <div className="w-64 h-64 ml-0 sm:flex-row sm:w-96 sm:h-96 mr-10">
                        <ComputersCanvas />
                        <ThreeSixtyIcon
                            color="action"
                            style={{
                                width: '2em',
                                height: '2em',
                                marginLeft: 172,
                            }}
                        />
                    </div>
                </div>

                <div className="absolute xs:bottom-10 bottom:32 w-full justify-center flex items-center bg-transparent">
                    <a href="#about">
                        <div className="w-[32px] h-[64px] rounded-3xl border-4 border-gray-500 flex justify-center items-start p-2">
                            <motion.dev
                                animate={{ y: [0, 24, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                }}
                                className="w-3 h-3 rounded-full bg-gray-500 mb-1"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
