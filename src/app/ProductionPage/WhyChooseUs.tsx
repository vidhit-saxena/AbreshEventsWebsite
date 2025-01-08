import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="bg-black text-white py-16">
            <div className="max-w-7xl  mx-auto text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Why Choose Us?</h2>
                <p className="text-gray-400 text-xl mb-10 mx-4 lg:mx-0">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br/>
                    Velit officia consequat duis enim velit mollit.
                </p>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0">
                    {[
                        {
                            title: 'End-to-End Solutions',
                            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
                        },
                        {
                            title: 'Experienced Team',
                            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
                        },
                        {
                            title: 'Quality-Driven',
                            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
                        },
                        {
                            title: 'Timely Delivery',
                            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#272727] p-6 px-8 text-left rounded-2xl shadow-lg border border-purple-300 hover:shadow-purple-500/50 hover:border-purple-500 transition-shadow hover:scale-105"
                        >
                            <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-md mb-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
