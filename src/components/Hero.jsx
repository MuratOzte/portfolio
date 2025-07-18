import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import { useMediaQuery } from '@mui/material';
import AnimatedText from './animated/AnimatedText';
import AnimatedParagraf from './animated/AnimatedParagraf';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const matches = useMediaQuery('(max-width:700px)');
    const { t } = useTranslation();

    return (
        <div className="relative mx-auto w-full h-screen bg-yellow-100 ">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[60px] max-w-7xl mx-auto flex flex-row  items-start gap-5 justify-start`}
            >
                <div className="flex flex-col justify-center items-center mt-14">
                    <div className="w-5 h-5 rounded-full bg-yellow-500 " />
                    <div className="w-1 sm:h-80 h-40 yellow-gradient" />
                </div>
                <div className="flex md:flex-row flex-col justify-s gap-0 md:gap-16 items-start">
                    <div>
                        {/* <AnimatedText text={t('hero.greeting')} /> */}
                        <AnimatedText
                            greeting1={t('hero.greeting1')}
                            greeting2={t('hero.greeting2')}
                        />
                        <AnimatedParagraf p={t('hero.paragraph')} />
                    </div>
                    <div className="w-full h-64 sm:flex-row sm:w-96 sm:h-96 mx-auto">
                        <ComputersCanvas />
                    </div>
                </div>

                <div className="hidden xs:bottom-40 bottom:32 w-full justify-center md:absolute md:flex items-center bg-transparent">
                    <a href="#about">
                        <div className="w-[32px] h-[64px] rounded-3xl border-4 border-gray-500 flex justify-center p-2">
                            <motion.div
                                animate={{ y: [0, 24, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                }}
                                className="w-3 h-3 rounded-full bg-gray-500 mb-1"
                            />
                            <p className='text-gray-700 text-sm absolute top-[70px] font-medium'>{t('hero.scrollHint')}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
