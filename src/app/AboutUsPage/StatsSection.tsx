import React from 'react';
import Image, { StaticImageData } from 'next/image';
import spotify from '@/assets/images/spotify-logo.png';
import slack from '@/assets/images/slack-logo.png';
import evanto from '@/assets/images/envato-logo.png';
import google from '@/assets/images/google-logo.png';
import netflix from '@/assets/images/netflix-logo.png';

type StatItem = {
    number: string;
    label: string;
};

type ClientItem = {
    name: string;
    src: StaticImageData;
};

const StatsSection = () => {
    const stats: StatItem[] = [
        { number: '546+', label: 'Our Clients' },
        { number: '42+', label: 'Services' },
        { number: '10+', label: 'Country' }
    ];

    const clients: ClientItem[] = [
        { name: 'Google', src: google },
        { name: 'Netflix', src: netflix },
        { name: 'Envato', src: evanto },
        { name: 'Spotify', src: spotify },
        { name: 'Slack', src: slack }
    ];

    return (
        <section className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-2">
                    {/* Stats Side */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-row justify-evenly md:justify-evenly lg:flex-col lg:justify-start space-x-4 lg:space-x-0 lg:space-y-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm sm:text-base text-white">
                                        {stat.label}
                                    </div>
                                    {index !== stats.length - 1 && (
                                        <div className="hidden lg:block w-20 h-0.5 bg-white mt-4"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8 space-y-6">
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 text-center lg:text-left">
                            About Abresh events
                        </h2>
                        <p className="text-white text-base sm:text-lg lg:text-xl mb-6 lg:mb-10 text-center lg:text-left leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <button className="border border-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-white hover:text-black transition-colors text-sm sm:text-base">
                                Read More
                            </button>
                        </div>
                    </div>

                    {/* Client Logos Side */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-4">
                            {clients.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center lg:justify-end"
                                >
                                    <div className="relative h-12 sm:h-16 w-24 sm:w-32">
                                        <Image
                                            src={client.src}
                                            alt={`${client.name} logo`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 128px"
                                            priority={index < 2}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

