const RestartSection: React.FC = () => {
    return (
        <section className="bg-[#272727] py-24 px-6 md:h-full">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
                    Ready To Start Your Dream Project
                </h2>
                <p className="text-gray-400 text-xl mb-10">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                {/* Button */}
                <button
                    className="bg-[#A044FF] text-white text-md font-medium py-2 px-12 hover:bg-purple-700 transition duration-300"
                >
                    Contact Us
                </button>
            </div>
        </section>
    );
};

export default RestartSection;
