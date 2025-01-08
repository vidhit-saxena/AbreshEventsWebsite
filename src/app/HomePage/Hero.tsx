'use client';

import ArrowWIcon from '@/assets/Icons/arrow-right.svg';
import StarImage from '@/assets/images/star.png';
import PyramidImage from '@/assets/images/pyramid.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { useState, useRef } from 'react';

export const Hero = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    // Create a ref for the next section
    const nextSectionRef = useRef<HTMLDivElement>(null);

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleImageClick = () => {
        setIsClicked(true);
    };

    const handleMouseEnter = () => {
        if (!isClicked) {
            setIsClicked(false);
        }
    };

    // New function to handle smooth scrolling
    const handleExploreClick = () => {
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
            {/* Background Glow */}
            <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2800px] lg:h-[1000px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

            <div className="container mx-auto px-4 relative">
                {/* Header Section */}
                <div className="flex items-center justify-center">
                    <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
                        <span className="animate-gradient-move bg-[length:400%_100%] bg-custom-gradient font-semibold text-transparent bg-clip-text [-webkit-background-clip:text]">
                            Welcome to ABResh Events
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <span className=" ">Read more</span>
                            <ArrowWIcon />
                        </span>
                    </a>
                </div>

                {/* Movable Images */}
                <div className="flex justify-center mt-8">
                    <div className="inline-flex relative">
                        <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
                            Digital Products
                            <br />
                            and Services
                        </h1>

                        {/* Pyramid Image with Lottie */}
                        <motion.div
                            className="absolute right-[596px] top-[90px] hidden sm:inline lg:right-[780px] lg:top-[30px] lg:w-[300px] lg:h-[300px] group"
                            drag
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                            onClick={handleImageClick}
                            onMouseEnter={handleMouseEnter}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={PyramidImage}
                                    height="300"
                                    width="300"
                                    alt=""
                                    className="max-w-none"
                                    draggable="false"
                                />
                                <div className={`absolute top-[-50px] left-1/2 transform -translate-x-1/2 ${isClicked ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 flex flex-col items-center`}>
                                    <div className="bg-white/10 px-3 py-1 rounded-md text-xs font-medium text-white shadow-md">
                                        Drag Me!
                                    </div>
                                    <DotLottiePlayer
                                        src="/assets/lottie/wink.lottie"
                                        autoplay
                                        loop
                                        className="w-12 h-12 mt-2"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Star Image with Lottie */}
                        <motion.div
                            className="absolute 
                                top-[16px] left-[540px] 
                                hidden sm:inline
                                lg:top-[96px] lg:left-[790px]
                                lg:w-[270px] lg:h-[270px] group"
                            drag
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                            onClick={handleImageClick}
                            onMouseEnter={handleMouseEnter}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={StarImage}
                                    height="270"
                                    width="270"
                                    alt=""
                                    className="max-w-none"
                                    draggable="false"
                                />
                                <div className={`absolute top-[-50px] left-1/2 transform -translate-x-1/2 ${isClicked ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 flex flex-col items-center`}>
                                    <div className="bg-white/10 px-3 py-1 rounded-md text-xs font-medium text-white shadow-md">
                                        Drag Me!
                                    </div>
                                    <DotLottiePlayer
                                        src="/assets/lottie/wink.lottie"
                                        autoplay
                                        loop
                                        className="w-12 h-12 mt-2"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="flex justify-center">
                    <p className="text-center text-xl mt-8 max-w-md">
                        ABResh Technologies, focusing on how their digital solutions (web, app, software, digital marketing) help businesses grow and innovate.
                    </p>
                </div>
                <div className="flex justify-center mt-8">
                    <button 
                        onClick={handleExploreClick}
                        className="relative px-5 py-3 font-medium text-black bg-white/80 rounded-lg shadow-m hover:scale-110 transition duration-300 ease-in-out"
                    >
                        <span>Explore</span>
                    </button>
                </div>
            </div>

            {/* Ref for the next section - you'll need to add this to the next section component */}
            <div ref={nextSectionRef}></div>
        </div>
    );
};