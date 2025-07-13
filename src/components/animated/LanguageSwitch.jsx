import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../util/i18n';

const LanguageToggle = () => {
    const { i18n, t } = useTranslation();
    const isEnglish = i18n.language === 'en';

    useEffect(() => {
        const storedLang = localStorage.getItem('preferredLanguage') || 'tr';
        i18n.changeLanguage(storedLang);
    }, [i18n]);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'tr' ? 'en' : 'tr';
        i18n.changeLanguage(newLang);
        localStorage.setItem('preferredLanguage', newLang);
    };

    return (
        <div className="bg-transparent flex flex-col items-center justify-center font-[Nunito]">
            <input
                type="checkbox"
                id="language-toggle"
                checked={isEnglish}
                onChange={toggleLanguage}
                className="hidden"
            />
            <label
                htmlFor="language-toggle"
                className={`relative w-[150px] h-[60px] rounded-full cursor-pointer bg-yellow-400 transition `}
                id="button"
            >
                <div
                    id="knob"
                    className={`w-[50px] h-[50px] rounded-full bg-transparent absolute top-[5px] transition-all duration-400
          ${isEnglish ? 'left-[95px]' : 'left-[5px]'}
          bg-cover bg-center`}
                    style={{
                        backgroundImage: `url(${
                            isEnglish
                                ? 'https://m.media-amazon.com/images/I/61dHFpZmRSL._AC_UF1000,1000_QL80_.jpg'
                                : 'https://i.hizliresim.com/ltsw1d9.jpg'
                        })`,
                    }}
                />
                <div
                    id="language-text"
                    className={`absolute bg-transparent top-1/2 text-white font-bold text-[18px] transition-all duration-400 transform -translate-y-1/2 ${
                        isEnglish ? 'left-[20px]' : 'left-[70px]'
                    }`}
                >
                    {isEnglish ? 'English' : 'Türkçe'}
                </div>
            </label>
        </div>
    );
};

export default LanguageToggle;
