import { useTranslation } from 'react-i18next';
import { BiCategory, BiLogoJquery, BiLogoRedux } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';
import { FaLinkedin, FaBootstrap } from 'react-icons/fa';
import {
    SiNextdotjs,
    SiTailwindcss,
    SiThreedotjs,
    SiReact,
} from 'react-icons/si';
import CompanyHeader from './CompanyHeader';
import CompanyList from './CompanyList';

const Baykar = () => {
    const { t } = useTranslation();

    return (
        <div className="my-12 mx-8 bg-transparent flex">
            {/* Left side: position + tech stack */}
            <div className="flex flex-col w-1/2 bg-transparent">
                <CompanyHeader
                    title={'Front-end Developer Intern'}
                    date={'07/2025 - 09/2025'}
                />

                <div className="bg-transparent flex flex-wrap gap-5 justify-center mt-6">
                    <div className="bg-transparent flex justify-center flex-col items-center">
                        <SiReact
                            className="bg-transparent text-sky-400"
                            size={64}
                        />
                        <span className="bg-transparent text-gray-600 font-semibold text-sm">
                            React
                        </span>
                    </div>

                    <div className="bg-transparent flex justify-center flex-col items-center">
                        <SiNextdotjs
                            className="bg-transparent text-gray-900"
                            size={64}
                        />
                        <span className="bg-transparent text-gray-600 font-semibold text-sm">
                            Next.js
                        </span>
                    </div>

                    <div className="bg-transparent flex justify-center flex-col items-center">
                        <SiTailwindcss
                            className="bg-transparent text-sky-500"
                            size={64}
                        />
                        <span className="bg-transparent text-gray-600 font-semibold text-sm">
                            Tailwind CSS
                        </span>
                    </div>

                    <div className="bg-transparent flex justify-center flex-col items-center">
                        <SiThreedotjs
                            className="bg-transparent text-emerald-500"
                            size={64}
                        />
                        <span className="bg-transparent text-gray-600 font-semibold text-sm">
                            Three.js
                        </span>
                    </div>

                    <div className="bg-transparent flex justify-center flex-col items-center">
                        <BiLogoJquery
                            className="bg-transparent text-sky-600"
                            size={64}
                        />
                        <span className="bg-transparent text-gray-600 font-semibold text-sm">
                            jQuery
                        </span>
                    </div>

                    <div className="bg-transparent flex justify-center flex-col items-center">
                        <FaBootstrap
                            className="bg-transparent text-purple-600"
                            size={64}
                        />
                        <span className="bg-transparent text-gray-600 font-semibold text-sm">
                            Bootstrap
                        </span>
                    </div>

                    <div className="bg-transparent flex justify-center flex-col items-center">
                        <BiLogoRedux
                            className="bg-transparent text-purple-500"
                            size={64}
                        />
                        <span className="bg-transparent text-gray-600 font-semibold text-sm">
                            Redux
                        </span>
                    </div>
                </div>

                {/* Baykar maddeleri için translation.json içindeki "baykar" key'i kullanılıyor */}
                <CompanyList company={'baykar'} even={true} />
            </div>

            {/* Right side: company info */}
            <div className="w-1/2 flex flex-col items-center justify-center bg-transparent mt-24">
                <a
                    className="bg-transparent"
                    href="https://baykartech.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://media.licdn.com/dms/image/v2/C4E0BAQEcA5bCmGhuyA/company-logo_200_200/company-logo_200_200/0/1631321447936/baykar_technologies_logo?e=1757548800&v=beta&t=sQy_HC9T8zB9Xy7pZ9Fb3cra8rZwGWu4qgdr-9THk9E"
                        className="w-28 mb-6 rounded-full border border-white shadow-md hover:scale-105 transition-all duration-150 cursor-pointer bg-transparent"
                        alt="Baykar Logo"
                    />
                </a>

                <h1 className="bg-transparent text-5xl font-bold text-gray-700 text-center">
                    {t('baykarInfo.title')}
                </h1>

                <div className="bg-transparent flex justify-center items-center mt-4 space-x-2">
                    <BiCategory
                        className="bg-transparent text-gray-700"
                        size={36}
                    />
                    <h1 className="bg-transparent text-gray-700 font-semibold">
                        <span className="bg-transparent font-bold">
                            {t('ui.cat')}
                        </span>{' '}
                        {t('baykarInfo.category')}
                    </h1>
                </div>

                <div className="bg-transparent flex justify-center items-center mt-4 space-x-2">
                    <CgWebsite
                        className="bg-transparent text-gray-700"
                        size={36}
                    />
                    <a
                        href="https://baykartech.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-transparent"
                    >
                        <h1 className="bg-transparent text-gray-700 font-semibold">
                            <span className="bg-transparent font-bold">
                                Website :
                            </span>{' '}
                            https://baykartech.com
                        </h1>
                    </a>
                </div>

                <div className="bg-transparent flex justify-center items-center mt-4 space-x-2">
                    <FaLinkedin
                        className="text-blue-500 bg-transparent"
                        size={36}
                    />
                    <a
                        href="https://www.linkedin.com/company/baykar"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-transparent"
                    >
                        <h1 className="bg-transparent text-gray-700 font-semibold">
                            <span className="bg-transparent font-bold">
                                Linkedin :
                            </span>{' '}
                            https://www.linkedin.com/company/baykar
                        </h1>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Baykar;
