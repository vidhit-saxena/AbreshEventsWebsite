import React from "react";

const OurValue = () => {
    return (
        <section className="bg-black text-white pb-16 pt-0 mt-10 lg:mt-0">
            <div className="max-w-7xl mx-auto text-center px-4">
                {/* Title Section */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Value</h2>
                <p className="text-gray-400 text-xl mb-12 max-w-5xl mx-auto leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever
                </p>

                {/* Value Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-16 mx-2 md:mx-2 lg:mx-0">
                    {[
                        { title: "Innovation", id: 1 },
                        { title: "Collaboration", id: 2 },
                        { title: "Care", id: 3 }
                    ].map((value) => (
                        <div
                            key={value.id}
                            className="rounded-lg overflow-hidden border border-white"
                        >
                            {/* Card Header */}
                            <div className="bg-[#272727] p-6">
                                <h3 className="text-2xl font-semibold text-start">{value.title}</h3>
                            </div>

                            {/* Card Body */}
                            <div className="bg-purple-600 p-6">
                                <p className="text-white leading-relaxed text-start text-lg">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValue;