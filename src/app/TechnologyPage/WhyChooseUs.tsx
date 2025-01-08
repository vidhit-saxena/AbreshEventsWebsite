import React from "react";

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            title: "Innovative Solutions",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            icon: "/icons/innovative.svg", // Replace with the correct icon path
        },
        {
            id: 2,
            title: "Client-Centric Approach",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            icon: "/icons/client-centric.svg", // Replace with the correct icon path
        },
        {
            id: 3,
            title: "Scalable Solutions",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            icon: "/icons/scalable.svg", // Replace with the correct icon path
        },
    ];

    return (
        <section className="py-12 lg:py-16  bg-black text-white">
            <div className="container mx-auto max-w-7xl text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Why Choose Us</h2>
                <p className="text-gray-400 mb-12">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br/>Velit officia consequat duis enim velit mollit.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="p-6 bg-gray-900 rounded-lg shadow-lg border border-transparent hover:border-purple-600 hover:shadow-xl transform transition duration-300 hover:scale-105"
                        >
                            <div className="flex justify-center mb-4">
                                <img src={feature.icon} alt={feature.title} className="w-16 h-16 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <div className="flex justify-center">
                                <div className="h-[2px] w-10 bg-purple-500  mb-4"></div>
                                <div className="h-[2px] w-4 bg-purple-500 ml-1 mb-4"></div>
                            </div>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
