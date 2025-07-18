import { motion } from 'framer-motion';
import { styles } from '../../styles';

const AnimatedParagraf = ({p}) => {
    // Metin animasyonu için X ekseninde kayma ve opacity kullanıyoruz
    const paragraphVariants = {
        hidden: {
            opacity: 0, // Başlangıçta görünmez
            x: 50, // Sağdan gelmeye başlar
        },
        visible: {
            opacity: 1, // Görünür olacak
            x: 0, // Orijinal pozisyonuna gelir
            transition: {
                type: 'spring', // Akışkan geçiş
                damping: 25,
                stiffness: 120,
                delay: 0.3, // Gecikmeli başlatma
            },
        },
    };

    return (
        <motion.p
            className={`${styles.heroSubText} text-gray-600 mt-3 z-10`}
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
        >
            {p}
        </motion.p>
    );
};

export default AnimatedParagraf;
