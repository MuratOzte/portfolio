import { motion } from 'framer-motion';
import { styles } from '../../styles';

const AnimatedText = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.3 * i,
            },
        }),
    };

    const child = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const text1 = "Hi, I'm ";
    const text2 = 'Murat';

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: '100%',
            transition: {
                delay: 0.5, 
                type: 'spring',
                damping: 15,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h1
            className={`${styles.heroHeadText} text-gray-600`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {text1.split('').map((char, index) => (
                <motion.span key={`text1-${index}`} variants={child}>
                    {char}
                </motion.span>
            ))}

            <span className="relative inline-block">
                {text2.split('').map((char, index) => (
                    <motion.span
                        key={`text2-${index}`}
                        variants={child}
                        className="text-[#eab308]"
                    >
                        {char}
                    </motion.span>
                ))}

                <motion.span
                    className="absolute bottom-2 left-0 h-1 bg-[#eab308] opacity-60 rounded-full"
                    variants={lineVariants}
                />
            </span>
        </motion.h1>
    );
};

export default AnimatedText;
