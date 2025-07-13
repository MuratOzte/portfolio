import { FaHome, FaTwitter, FaGithub, FaCodepen } from 'react-icons/fa';

const messages = [
    'Wolf snackwave cray mustache typewriter butcher tbh.',
    'Messenger bag normcore cardigan, brunch organic tumblr locavore street art.',
    'Echo park iPhone intelligentsia literally 8-bit pickled irony master cleanse activated charcoal yuccie slow-carb ennui.',
    'Marfa pinterest shaman literally tbh crucifix pop-up taiyaki tacos raw denim offal shoreditch jean shorts yr.',
    'Ethical fixie man braid, pork belly shoreditch tumeric cloud bread migas chillwave raclette normcore freegan.',
];

const OrderedListUI = () => {
    return (
        <div className="flex flex-col gap-2 bg-transparent">
            {messages.map((msg, i) => (
                <div
                    key={i}
                    className="flex items-center gap-4 py-2 px-4 hover:bg-yellow-400 transition group cursor-pointer bg-transparent rounded-md"
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
