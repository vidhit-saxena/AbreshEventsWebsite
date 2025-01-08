import React from 'react';
import Image, {StaticImageData} from 'next/image';
import PPS1 from '@/assets/images/PPS1.png'
import PPS2 from '@/assets/images/PPS2.png'
import PPS3 from '@/assets/images/PPS3.png'
import PPS4 from '@/assets/images/PPS4.png'
import PPS5 from '@/assets/images/PPS5.png'

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: "Video Production",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            imageUrl: PPS1
        },
        {
            id: 2,
            title: "Audio Production",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            imageUrl: PPS2
        },
        {
            id: 3,
            title: "Photography",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            imageUrl: PPS3
        },
        {
            id: 4,
            title: "Animation and Motion Graphics",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            imageUrl: PPS4
        },
        {
            id: 5,
            title: "Event Production",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            imageUrl: PPS5
        }
    ];

    return (
        <section className="bg-black text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center">Provided Service</h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-10  mx-auto text-center">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br/>
                    Velit officia consequat duis enim velit mollit.
                </p>

                <div className="space-y-14 md:space-y-10 lg:space-y-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            id={`service-${service.id}`}
                            className={`flex flex-col gap-8 md:gap-16 lg:gap-32 ${service.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                                } items-center`}
                        >
                            <div className="w-full md:w-2/5 lg:w-2/5">
                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                    <Image
                                        src={service.imageUrl}
                                        alt={service.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 space-y-4">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#A044FF]">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 lg:text-xl">
                                    {service.description}
                                </p>
                                <button className="group flex items-center space-x-2 text-[#A044FF] hover:text-purple-400 transition-colors duration-300">
                                    <span className='lg:text-lg'>Learn More</span>
                                    <svg
                                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;