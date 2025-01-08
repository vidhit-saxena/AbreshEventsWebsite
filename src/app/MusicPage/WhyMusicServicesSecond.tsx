const WhyMusicServicesSecond: React.FC = () => {
    const stats = [
        {
            number: '45+',
            title: 'Expert Team',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        },
        {
            number: '100',
            title: 'Custom Solution',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        },
        {
            number: '10+',
            title: 'Success Stories',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        },
    ];

    return (
        <section className="bg-black py-8 lg:py-16 px-2 lg:px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Why Music Service</h2>
                <p className="text-gray-400 text-xl mb-10">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br/>Velit officia
                    consequat duis enim velit mollit.
                </p>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mx-4 md:mx-8 lg:gap-20 lg:mx-20">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-start border border-purple-500 rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow hover:scale-105"
                        >
                            <h3 className="text-white text-5xl font-extrabold mb-4">{stat.number}</h3>
                            <h4 className="text-white text-xl font-semibold mb-4">{stat.title}</h4>
                            <p className="text-gray-400 text-md mb-2">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyMusicServicesSecond;
