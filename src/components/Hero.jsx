import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';

const Hero = () => {
    return (
        <div className="relative mx-auto w-full h-screen bg-yellow-100 ">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 justify-between `}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-yellow-500 " />
                    <div className="w-1 sm:h-80 h-40 yellow-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-gray-800`}>
                        Hi, I'm <span className="text-[#eab308]">Murat</span>
                    </h1>
                    <p className={`${styles.heroSubText} text-gray-600 mt-3 `}>
                        I build web applications and user interfaces
                    </p>
                </div>
                <div className="w-96 h-96 ml-0">
                    <ComputersCanvas />
                    <ThreeSixtyIcon
                        color="action"
                        style={{ width: '2em', height: '2em', marginLeft: 172 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
