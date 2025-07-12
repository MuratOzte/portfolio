const CompanyHeader = ({title,date}) => {
    return (
        <div className="flex flex-col items-center justify-center bg-yellow-300 mt-24">
            <div className="bg-yellow-300 flex gap-8 items-center text-xl">
                <h1 className="bg-yellow-300 text-gray-600 font-bold text-2xl">
                    {title}
                </h1>
                <h1 className="bg-gray-600 px-2 py-1 rounded-md shadow-md">
                    {date}
                </h1>
            </div>
        </div>
    );
};

export default CompanyHeader;
