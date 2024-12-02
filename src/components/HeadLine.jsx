
const HeadLine = ({ title, description }) => {
    return (
        <div className="text-center justify-center w-full mx-auto py-6">
            <p className="text-[#FF3811] text-sm font-bold">{title}</p>
            <h3 className="text-black font-bold text-2xl">{description}</h3>
        </div>
    );
};

export default HeadLine;