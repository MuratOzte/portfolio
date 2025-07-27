import { FaCss3, FaHtml5, FaLinkedin, FaReact } from 'react-icons/fa';
import CompanyHeader from './CompanyHeader';
import CompanyList from './CompanyList';
import { IoLogoJavascript } from 'react-icons/io';
import { CgWebsite } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';
import { BiCategory } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';

const Kopernik = () => {
    const { t } = useTranslation();

    return (
        <div className="my-12 mx-8 bg-transparent flex ">
            <div className="flex flex-col w-1/2 bg-transparent">
                <CompanyHeader
                    title={'Front-end Developer Intern'}
                    date={'02/2025 - 04/2025'}
                />
                <div className="bg-transparent flex gap-5 justify-center mt-6">
                    <div className="bg-transparent flex justify-center flex-col items-center">
                        <FaHtml5
                            className="bg-transparent text-orange-500"
                            size={64}
                        />
                        <span className="bg-transparent text-gray-600 font-semibold text-sm">
                            HTML
                        </span>
                    </div>
                    <div className="bg-transparent flex justify-center flex-col items-center">
                        <FaCss3
                            className="bg-transparent text-blue-500"
                            size={64}
                        />
                        <span className="bg-transparent text-gray-600 font-semibold text-sm">
                            CSS
                        </span>
                    </div>
                    <div className="bg-transparent flex justify-center flex-col items-center">
                        <RiTailwindCssFill
                            className="bg-transparent text-blue-500"
                            size={64}
                        />
                        <span className="bg-transparent text-gray-600 font-semibold text-sm">
                            Tailwind CSS
                        </span>
                    </div>
                    <div className="bg-transparent flex justify-center flex-col items-center">
                        <IoLogoJavascript
                            className="bg-transparent text-yellow-400"
                            size={64}
                        />
                        <span className="bg-transparent text-gray-600 font-semibold text-sm">
                            Javascript
                        </span>
                    </div>
                    <div className="bg-transparent flex justify-center flex-col items-center">
                        <FaReact
                            className="bg-transparent text-blue-400"
                            size={64}
                        />
                        <span className="bg-transparent text-gray-600 font-semibold text-sm">
                            React
                        </span>
                    </div>
                </div>
                <CompanyList company={'lfu'} even={true} />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center bg-transparent mt-24">
                <a
                    className="bg-transparent"
                    href="https://kopernik.com.tr/"
                    target="_blank"
                >
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4D0BAQGug8UDNhQ2pw/company-logo_200_200/B4DZd3u_DZHkAI-/0/1750060496120/kopernik_tr_logo?e=1757548800&v=beta&t=dcOstwPhAjlCO_OKpcwaDcuy5n5cg5oz7rMx2vnRORs"
                        className="w-28 mb-6 rounded-full border border-white shadow-md hover:scale-105 transition-all duration-150 cursor-pointer"
                    />
                </a>
                <h1 className="bg-transparent text-5xl font-bold text-gray-700">
                    {t('lfuInfo.title')}
                </h1>
                <div className="bg-transparent flex justify-center items-center mt-4 space-x-2">
                    <BiCategory
                        className="bg-transparent text-gray-700"
                        size={36}
                    />
                    <h1 className="bg-transparent text-gray-700 font-semibold ">
                        <span className="bg-transparent font-bold">
                            {t('ui.cat')}
                        </span>{' '}
                        {t('lfuInfo.category')}
                    </h1>
                </div>
                <div className="bg-transparent flex justify-center items-center mt-4 space-x-2">
                    <CgWebsite
                        className="bg-transparent text-gray-700"
                        size={36}
                    />
                    <a
                        href="https://kopernik.com.tr/"
                        target="_blank"
                        className="bg-transparent"
                    >
                        <h1 className="bg-transparent text-gray-700 font-semibold">
                            <span className="bg-transparent font-bold ">
                                Website :
                            </span>{' '}
                            https://kopernik.com.tr
                        </h1>
                    </a>
                </div>
                <div className="bg-transparent flex justify-center items-center mt-4 space-x-2">
                    <FaLinkedin
                        className="text-blue-500 bg-transparent"
                        size={36}
                        enableBackground={true}
                    />
                    <a
                        href="https://www.linkedin.com/company/kopernik-tr/"
                        target="_blank"
                        className="bg-transparent"
                    >
                        <h1 className="bg-transparent text-gray-700 font-semibold">
                            <span className="bg-transparent font-bold ">
                                Linkedin :
                            </span>{' '}
                            https://www.linkedin.com/company/kopernik-tr
                        </h1>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Kopernik;
