import { useTranslation } from 'react-i18next';
import { FaHome, FaTwitter, FaGithub, FaCodepen } from 'react-icons/fa';

const OrderedListUI = ({ company, even }) => {
    const { t } = useTranslation();

    const messages = t(company.toString(), { returnObjects: true });

    return (
        <div className="flex flex-col gap-2 bg-transparent">
            {messages.map((msg, i) => (
                <div
                    key={i}
                    className={`group flex items-center gap-4 py-2 px-4  ${
                        even ? 'hover:bg-yellow-500' : 'hover:bg-yellow-400'
                    }  transition cursor-pointer bg-transparent rounded-md`}
                >
                    <span className="text-[2rem] font-bold text-black opacity-5 group-hover:opacity-20 transition w-6 bg-transparent">
                        {i + 1}
                    </span>
                    <h3 className="text-sm text-[#3d3d3d] relative transition-all group-hover:translate-x-6 bg-transparent">
                        {msg}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default OrderedListUI;
